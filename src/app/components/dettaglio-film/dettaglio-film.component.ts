import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast, Crew, RootCast } from 'src/app/models/cast';
import { DettaglioFIlm } from 'src/app/models/dettaglioFilm';
import { SimilarResult, SimilarRoot } from 'src/app/models/similar';
import { TrailerResult, TrailerRoot } from 'src/app/models/trailer';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css']
})
export class DettaglioFilmComponent implements OnInit {
  movieId!: number;
  movieDetails!: DettaglioFIlm;
  attori: Cast[]=[];
  registi:string | Crew[]=[];
  similari:SimilarResult[]=[];
  trailers:TrailerResult[]=[];


  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService, 
    private router:Router,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      this.getMovieDetails();
      this.getMovieCredits();
      this.getMovieSimilar();
      this.getTrailer();
    });
  }

  //dettaglio film
  getMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(
      (details) => {
        this.movieDetails = details;

      }
      
    );
  }
 
  // CHIUSURA DETTAGLIO FILM, RITORNO AD HOME
  closeDetails(): void {
    
    this.router.navigate(['/home']);
  }
  

  //lista del Cast
  getMovieCredits(): void {
    //trovo gli attori
    this.movieService.getMovieCredits(this.movieId).subscribe(
      (credits: RootCast) => {
        this.attori = credits.cast.slice(0,6);
        const regista=credits.crew.find((persona) => persona.job === 'Director');
        this.registi = regista ? regista.name : '';
      }
    );

  }

    //lista film similari
    getMovieSimilar(): void{

      this.movieService.getMovieSimilar(this.movieId).subscribe(
        (simili:SimilarRoot)=>{
          this.similari=simili.results.slice(0,6);
          //console.log(this.similari)
        }
      )
    }

      // trailer
      getTrailer():void{
        this.movieService.getTrailer(this.movieId).subscribe(
          (trailer:TrailerRoot)=>{
            this.trailers=trailer.results.filter(result=>result.type === "Trailer");
            console.log(this.trailers);
          }
        )

      }

      getVideoUrl(trailer: TrailerResult): string {
        if (trailer) {
          const key = trailer.key;
          const url = `https://www.youtube.com/embed/${key}?autoplay=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url) as string;
         
        }
        return '';
      }
      
     
}

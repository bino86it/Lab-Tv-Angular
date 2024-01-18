import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Result[]=[];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(
      (response) => {  
      this.movies = response.results; 
      },
  
    );
  }
}


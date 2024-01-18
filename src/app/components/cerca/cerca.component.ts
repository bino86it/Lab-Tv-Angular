import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';




@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent {


  searchTerm: string = '';
  searchResults$: Observable<Result[]> = new Observable<Result[]>();

  constructor(private movieService: MovieService) { }

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.searchResults$ = this.movieService.searchMovies(this.searchTerm);
    } else {
      this.searchResults$ = new Observable<Result[]>(); // Resetta l'observable quando il termine di ricerca è vuoto
    }
  }
}
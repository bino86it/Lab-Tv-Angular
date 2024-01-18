import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Root } from '../models/movie';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';
import { DettaglioFIlm } from '../models/dettaglioFilm';
import { RootCast } from '../models/cast';
import { SimilarRoot } from '../models/similar';
import { TrailerRoot } from '../models/trailer';


export interface SearchOptions {
  query: string;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private apiUrl = `${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}&language=enUS&page=1`;
  private apiUrlS = `${environment.apiUrl}/search/movie?api_key=${environment.apiKey}&query=${query}&language=enUS&page=1`;


  constructor(private http:HttpClient) { }
  

  //POPOLA LA HOME CON FILM POPOLARI
  getMovies():Observable<Root>{
    return this.http.get<Root>(`${this.apiUrl}/movies`);

  }

  //FUNZIONE DI RICERCA DEI FILM
  searchMovies(query: string): Observable<Result[]> {
    const searchUrl = `${this.apiUrlS}/search/movie?api_key=${environment.apiKey}&query=${query}&language=enUS&page=1`;
    return this.http.get<Root>(searchUrl)
      .pipe(
        map((response: Root) => response.results || []),
        
      );
  }

  //APERTURA DETTAGLIO FILM
  getMovieDetails(movieId: number): Observable<DettaglioFIlm> {
    return this.http.get<DettaglioFIlm>(`${environment.apiUrl}/movie/${movieId}?api_key=${environment.apiKey}&language=it-IT`);

  }  

  //CAST
  getMovieCredits(movieId: number): Observable<RootCast> {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `${environment.Authorization}`,
      },
    };

    return this.http.get<RootCast>(
      `${environment.apiUrl}/movie/${movieId}/credits?language=en-US`,
      options
    );
  }
  //FILM CONSIGLIATI
  getMovieSimilar(movieId:number):Observable<SimilarRoot>{
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `${environment.Authorization}`,
      },

    } 

    return this.http.get<SimilarRoot>(
      `${environment.apiUrl}/movie/${movieId}/similar?language=en-US`,
      options
    );

  }


  //TRAILER
  getTrailer(movieId:number): Observable<TrailerRoot> {

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `${environment.Authorization}`,
      },

    } 


    return this.http.get<TrailerRoot>(
      `${environment.apiUrl}/movie/${movieId}/videos`, options
    );

  }

}
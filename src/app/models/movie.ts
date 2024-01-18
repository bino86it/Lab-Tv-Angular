
//RISPOSTA FILM POPULAR
export interface Root {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}
//ARRAY RESULTS CONTENUTA NELLA RISPOSTA FILM POPULAR
export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}



//GENERE FILM RISPOSTA
export interface Generi {
  genres: Genere[];
}

//ARRAY GENERI CONTENUTI IN RISPOSTA
export interface Genere {
  id: number;
  name: string;
}

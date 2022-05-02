export const MOVIE_LOADING = "MOVIE_LOADING";
export const MOVIE_FAIL = "MOVIE_FAIL";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const ADD_MOVIE = "MOVIE_SUCCESS";



export type MovieModel = {
  count: number,
  next: null,
  previous: null,
  results: {
    0: {
      title: string;
      episode_id: string;
      opening_crawl: number;
      director: string;
      producer: string;
      release_date: string;
      created: string;
      edited: string;
      url: string;
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
    }
  }
  
}


export interface MovieLoading {
  type: typeof MOVIE_LOADING
}

export interface MovieFail {
  type: typeof MOVIE_FAIL
}

export interface MovieSuccess {
  type: typeof MOVIE_SUCCESS,
  payload: MovieModel
}

export type MovieDispatchTypes = MovieLoading | MovieFail | MovieSuccess
import {
  MOVIE_FAIL,
  MOVIE_LOADING,
  MOVIE_SUCCESS,
  MovieDispatchTypes,
  MovieModel,
  ADD_MOVIE
} from "../actions/MovieActionTypes"

interface DefaultStateI {
  loading: boolean,
  movie?: MovieModel,
  searchHistory?: {} | null
}

const defaultState: DefaultStateI = {
  loading: false,
  searchHistory:null
};

export const movieReducer = (state: DefaultStateI = defaultState, action: MovieDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case MOVIE_FAIL:
      return {
        loading: false,
      }
    case MOVIE_LOADING:
      return {
        loading: true,
      }
    case MOVIE_SUCCESS:
      return {
        loading: false,
        movie: action.payload
      }
    default:
      return state
  }
};

export const AddMovieReducer = (state: DefaultStateI = defaultState, action: MovieDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        loading: false,
        searchHistory:  action.payload
      }
    
    default:
      return state
  }
};



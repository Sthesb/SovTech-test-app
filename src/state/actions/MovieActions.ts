import {Dispatch} from "redux";
import {MOVIE_FAIL, MOVIE_LOADING, MOVIE_SUCCESS, MovieDispatchTypes} from "./MovieActionTypes";
import axios from "axios";

export const GetMovie = (searchMovie: string) => async (dispatch: Dispatch<MovieDispatchTypes>) => {
  try {
    dispatch({
      type: MOVIE_LOADING
    })
 
    const res = await axios.get(`https://swapi.dev/api/films/?search=${searchMovie}`);

    dispatch({
      type: MOVIE_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: MOVIE_FAIL
    })
  }
};
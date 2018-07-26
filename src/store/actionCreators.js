import * as actionTypes from './actionTypes'

export const addMovie = (movie) => {
    return {
        type : actionTypes.ADD_MOVIE,
        movie : movie
    }
}

export const deleteMovie = (movie) => {
    return{
        type : actionTypes.DELETE_MOVIE,
        movie : movie
    }
}
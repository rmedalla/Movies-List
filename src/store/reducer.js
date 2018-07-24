const initialState = {
    movies : [],
  }
  
  const reducer = (state = initialState, action) => {
  
    if(action.type == "ADD_MOVIE_TITLE") {
      return {
        ...state,
        movieTitle: action.value
      }
    }
    else if(action.type == "ADD_MOVIE_IMAGE") {
      return {
        ...state,
        moviePoster: action.value
      }
    }
    else if(action.type == "ADD_MOVIE") {
      return {
        ...state,
        movies : state.movies.concat(action.payload)
      }
    }
    else if(action.type == "DELETE_MOVIE") {
      return {
        ...state,
        movies : state.movies.filter(movie => movie !== action.payload)
      }
    }
  
  
  
  
    return state
  
  }
  
  export default reducer
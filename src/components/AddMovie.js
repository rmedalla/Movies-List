import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from "../store/actionCreators"

export class AddMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie : {}
        }
    }

    handleTextChange = (e) => {

        console.log(e.target.value)
        console.log(e.target.value)

        this.setState({
            movie : {
              ...this.state.movie,
              [e.target.name] : e.target.value
            }
        })
    }

    render() {
      let movieList = this.props.results.map((movie, index) => {
        console.log(movie)
        return (
          <li key={index} className="movieInfo">
          <h2>Title: {movie.title} Year: {movie.year}</h2>
          <button onClick={() => this.props.deleteMovie(this.state.movie)}>Remove Movie</button>
          </li>
        )
      })
      return(
          <div>
              <h1>Add Movie</h1>
              <input name="title" onChange={this.handleTextChange} type="text" placeholder="Movie Title" />
              <input name="year" onChange={this.handleTextChange} type="text" placeholder="Movie Year"/>
              <button onClick={() => this.props.onSaveMovie(this.state.movie)}>Submit</button>
          <h2>
            {movieList}
          </h2>
          </div>
  
      )
    }
  }


const mapStateToProps = (state) => {
  return {
    results : state.movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addMovieTitleChange : (e) => dispatch({type : "ADD_MOVIE_TITLE", value : e.target.value}),
    // addMovieImageChange : (e) => dispatch({type : "ADD_MOVIE_IMAGE", value : e.target.value}),
    onSaveMovie : (movie) => dispatch(actionCreators.addMovie(movie)),
    deleteMovie : (movie) => {
      console.log(movie)
      dispatch({type : "DELETE_MOVIE", payload: movie})

    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)
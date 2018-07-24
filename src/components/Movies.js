
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Movies extends Component {
  render() {
    return(
      <div id="movies">
        <div><NavLink exact to = '/'>Home</NavLink></div>

      </div>
    )
  }
}
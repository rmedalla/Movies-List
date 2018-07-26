import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


export class Menu extends Component {
  render() {
    return(
      <div className="menu">
      <ul>
        <li><NavLink exact to = '/'>Home</NavLink></li>
        <li><NavLink exact to = '/add-movie'>Add Movie</NavLink></li>
      </ul>
      </div>
    );
  }
}

export default Menu;
import CardList from './CardList';
import SearchBox from './SearchBox';
import {Robots} from './Robots';
import React, { Component } from 'react';


class App extends Component {
  constructor (){
    super ()
    this.state = {
      Robots: Robots,
      SearchFied: ''
    }
  }

  onSearchChange =  (event) => {
    this.setState({ SearchFied: event.target.value })
  }
  render () {
    const filterenderRobots = this.state.Robots.filter(Robots => {
      return Robots.name.toLowerCase().includes(this.state.SearchFied.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>RoboFriend</h1>
        <SearchBox SearchChange = {this.onSearchChange} />
        <CardList Robots={filterenderRobots} />
      </div>
      
    );
  }
  
}

export default App;

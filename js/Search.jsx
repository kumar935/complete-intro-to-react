import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  // class needs to have render method which should return markup
  
  /*
  constructor (props) {
    super(props);
    
    this.state = {
      searchTerm: ""
    }
    // this.handleSearchTermChange = this.handleSearchTermChange.bind(this); //INSTEAD OF DOING THIS AND the plugin in .babelrc: "babel-plugin-transform-class-properties"
  }
  */
  
  // Instead of writing constructor just do this:
  state = {
    searchTerm: ""
  }
  
  handleSearchTermChange = event => { // writing it as arrow function for the babelrc plugin "babel-plugin-transform-class-properties" to allow the this binding
    this.setState({searchTerm: event.target.value});
    // this.state.searchTerm = 'blah' // this will work, but then react won't know state has been changed, and using setState you tell react to rerender explicitly
    // event = synthetic react event, almost similar to dom event
  }
  
  render () {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type="text" onChange={this.handleSearchTermChange} placeholder="Search" value={this.state.searchTerm}/>
        </header>
        <div>
          {/* preload.shows.map(show => <ShowCard key={show.imdbID} {...show}/>) */}  
          {preload.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.imdbID} {...show}/>)}
        </div>
      </div>
    )
  }
}

export default Search;
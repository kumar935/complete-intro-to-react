// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

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
  props: {
    shows: Array<Show>
  }
  
  // handleSearchTermChange = event => { // writing it as arrow function for the babelrc plugin "babel-plugin-transform-class-properties" to allow the this binding
  // before flow ^, after flow below ->
  handleSearchTermChange = (event: SyntheticKeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({searchTerm: event.target.value});
    // this.state.searchTerm = 'blah' // this will work, but then react won't know state has been changed, and using setState you tell react to rerender explicitly
    // event = synthetic react event, almost similar to dom event
  }
  
  render () {
    return (
      <div className="search">
        <Header showSearch handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm}/>
        <div>
          {/* preload.shows.map(show => <ShowCard key={show.imdbID} {...show}/>) */}  
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.imdbID} {...show}/>)}
        </div>
      </div>
    )
  }
}

export default Search;
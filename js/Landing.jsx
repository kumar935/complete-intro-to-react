import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  
  state = {
    searchTerm: ""
  }
  
  handleSearchTerm = event => {
    this.setState({searchTerm: event.target.value});
  }
  render(){
    return (
      <div className="landing">
        <h1>svvideo</h1>
        <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTerm} placeholder="Search"/>
        <Link to='/search'> Or Browse All</Link>
      </div>      
    )
  }
}

export default Landing;
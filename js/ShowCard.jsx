// @flow

import React, { Component } from 'react';
// dropping propTypes because using flow now
// import {string} from 'prop-types';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapped the wrapper with Link VVVVVVVVVVVVVVVVVVVVV and ANY too
const Wrapper = styled(Link: any)`   
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 10px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

/*
const ShowCard = (props: { poster: string, title: string, year: string, description: string, imdbID: string }) => (
  
  <Wrapper className="show-card" to={`/details/${props.imdbID}`}>
    <Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`}/>
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p> 
    </div>
  </Wrapper> 
  
)
*/

class ShowCard extends Component{
  shouldComponentUpdate () {
    return false;
    // ^this says once it has rendered, never update it.
  }
  props: Show,
  componentWillMount(){
    console.log("hello")
  }
  componentWillReceiveProps(newProps){

  }
  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
        <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`}/>
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p> 
        </div>
      </Wrapper>     
    )
  }
}

/*
ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}
*/ // dropping propTypes because using flow now
export default ShowCard;
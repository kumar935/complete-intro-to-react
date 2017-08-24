/*
import React from 'react'; // can't remove this dependency even though it direclty doesn't seem to be used because jsx gets transpiled to React.createElement
import { render } from 'react-dom';

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={ {color: props.color} }>{props.title}</h1>
    </div>
  )
  // can't return 2 top level elements because React.createElement(x), React.createElement(y) doesn't make sense. although in React 16 it'll work 
};

const MyFirstComponent = function() {
  return(
    <div id="my-first-component">
      <MyTitle title='Game of Thrones' color='YellowGreen'/>
      <MyTitle title='Stranger Things' color='GreenYellow'/>
      <MyTitle title='Rick and Morty' color='LimeGreen'/>
      <MyTitle title='House of Cards' color='peru'/>
    </div>
  );
  
};

render(<MyFirstComponent/>, document.getElementById('app'));

*/
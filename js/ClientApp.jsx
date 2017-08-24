// @flow

import React from 'react'; // can't remove this dependency even though it direclty doesn't seem to be used because jsx gets transpiled to React.createElement
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App/>, document.getElementById('app'));
}
renderApp();

if(module.hot){
  module.hot.accept('./App', ()=> {
    renderApp();
  })
}
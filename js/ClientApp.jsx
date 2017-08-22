import React from 'react'; // can't remove this dependency even though it direclty doesn't seem to be used because jsx gets transpiled to React.createElement
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
// class is a reserved word, that's why we need to call it className

const FourOhFour = () => <h1>404</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
     {/* what Switch component does is only render one element */}
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/search" component={Search}/>
        <Route component={FourOhFour}/>  
      </Switch>
    </div>  
  </BrowserRouter>
);

// if we didn't use exact, "/" will match "/foo" which we don't want, we only want "/"
render(<App/>, document.getElementById('app'));
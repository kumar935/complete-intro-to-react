// @flow

import React from 'react'; // can't remove this dependency even though it direclty doesn't seem to be used because jsx gets transpiled to React.createElement
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';
// class is a reserved word, that's why we need to call it className

const FourOhFour = () => <h1>404</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
     {/* what Switch component does is only render one element */}
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/search" component={() => <Search shows={preload.shows}/>}/>
        <Route path="/details/:id" component={(props: { match: Match}) => {
            const showData = preload.shows.find((show) => props.match.params.id === show.imdbID)
            return <Details show= {showData}/>;
          }} />
        <Route component={FourOhFour}/>  
      </Switch>
    </div>  
  </BrowserRouter>
);

// if we didn't use exact, "/" will match "/foo" which we don't want, we only want "/"
export default App;
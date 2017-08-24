import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    
    {/* preload.shows.map(show => <ShowCard show={show}/>) 
    RATHER THAN DIRECTLY PASSING show, we can use spread operator as show below
    */}
    <div>
      {preload.shows.map(show => <ShowCard key={show.imdbID} {...show}/>)}  
    </div>
    
  </div>
)



export default Search;
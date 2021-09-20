import './App.scss';
import NavBar from './components/NavBar/NavBar';
import React, {useState} from 'react';
import Main from "./components/Main/Main"

import beers from "./data/beers";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }
  
  const filteredBeers = beers.filter(beer => beer.image_url);
  
  const results = filteredBeers.filter(beer => {
    const beerTitleLower = beer.name.toLowerCase();
    
    return beerTitleLower.includes(searchTerm) && beer.image_url;
  });
  
  
  return (
    <div className="App">
      <div className="App__nav">
        <NavBar filteredBeers={filteredBeers} handleInput={handleInput}/>
      </div>
      <div className="App__main">
        <Main results={results}/>
      </div>
    </div>
  );
}

export default App;

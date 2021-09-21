import './App.scss';
import NavBar from './components/NavBar/NavBar';
import React, {useState, useEffect} from 'react';
import Main from "./components/Main/Main"


// import beers from "./data/beers";

function App() {

  const [beersApi, setBeersApi] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const handleInput = event => {
    setSearchTerm(event.target.value.toLowerCase());
    const newResults = beersApi.filter(beer => {
      const beerTitleLower = beer.name.toLowerCase();
      
      return beerTitleLower.includes(event.target.value.toLowerCase());
    })
    setSearchResults(newResults)
  }

  const getBeersApi = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(jsonResponse => {
      setBeersApi(jsonResponse)
      setSearchResults(jsonResponse)
    })
    .catch(err => console.log(err));
  }
  useEffect (() => getBeersApi(), [])

  const handleFilterOne = event => {
    event.target.checked ? setSearchResults(beersApi.filter(beer => beer.abv > 6
    )) : getBeersApi()
  }

  const handleFilterTwo = event => {
    event.target.checked ? setSearchResults(beersApi.filter(beer => beer.first_brewed.split("/")[1] < 2010 
    )) : getBeersApi()
  }

  const handleFilterThree = event => {
    event.target.checked ? setSearchResults(beersApi.filter(beer => beer.ph < 4
    )) : getBeersApi()
  }
  
  
  
  
  return (
    <div className="App">
      <div className="App__nav">
        <NavBar searchTerm={searchTerm} handleInput={handleInput} handleFilterOne={handleFilterOne} handleFilterTwo={handleFilterTwo} handleFilterThree={handleFilterThree}/>
      </div>
      <div className="App__main">
        {searchResults && <Main beers={searchResults} />}
      </div>
    </div>
  );
}

export default App;

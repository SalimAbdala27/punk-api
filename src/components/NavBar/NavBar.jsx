import React, {useState} from 'react'
import "./NavBar.scss"
import SearchBox from '../SearchBox/SearchBox'
import FilterItem from '../FilterItem/FilterItem';

const NavBar = (props) => {
  const {searchTerm, handleInput, handleFilterOne, handleFilterTwo, handleFilterThree} = props;

  return (
    <div className="navbar">
      <div className="navbar__search">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
      </div>
      <div className="navbar__filter">
        <FilterItem handleFilterOne={handleFilterOne} handleFilterTwo={handleFilterTwo} handleFilterThree={handleFilterThree}/>
      </div>
    </div>
  )
}
export default NavBar

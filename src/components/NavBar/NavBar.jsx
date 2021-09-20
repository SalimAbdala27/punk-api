import React, {useState} from 'react'
import "./NavBar.scss"
import SearchBox from '../SearchBox/SearchBox'

const NavBar = (props) => {
  const {searchTerm, handleInput} = props;

  return (
    <div className="navbar">
      <div className="navbar__search">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
      </div>
    </div>
  )
}
export default NavBar

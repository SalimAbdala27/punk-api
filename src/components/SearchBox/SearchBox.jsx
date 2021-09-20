import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <div className="searchbox">
      <label className="searchbox__label">Search</label>
      <input type="text" value={searchTerm} onInput={handleInput} className="searchbox__input"/>
    </div>
  )
}

export default SearchBox

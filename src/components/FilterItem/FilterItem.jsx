import React from 'react'
import "./FilterItem.scss"

const FilterItem = (props) => {
  const {handleFilterOne, handleFilterTwo, handleFilterThree} = props;
  return (
    <div className="filteritem">
      <form action="">
        <label htmlFor="" className="filteritem__label">High ABV 6.0%</label>
        <input type="checkbox" name="" id="" className="filteritem__checkbox" onClick={handleFilterOne}/>
        <br />
        <label htmlFor="" className="filteritem__label">Classic Range</label>
        <input type="checkbox" name="" id="" className="filteritem__checkbox" onClick={handleFilterTwo} />
        <br />
        <label htmlFor="" className="filteritem__label">Acidic pH 4 or greater </label>
        <input type="checkbox" name="" id="" className="filteritem__checkbox" onClick={handleFilterThree} />
      </form>
    </div>
  )
}

export default FilterItem

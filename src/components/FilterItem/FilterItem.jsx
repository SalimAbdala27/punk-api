import React from 'react'
import "./FilterItem.scss"

const FilterItem = (props) => {
  const {handleFilterOne, handleFilterTwo, handleFilterThree} = props;
  return (
    <div>
      <form action="">
        <label htmlFor="">High ABV 6.0%</label>
        <input type="checkbox" name="" id="" onClick={handleFilterOne}/>
        <br />
        <label htmlFor="">Classic Range</label>
        <input type="checkbox" name="" id="" onClick={handleFilterTwo} />
        <br />
        <label htmlFor="">Acidic pH 4 or greater </label>
        <input type="checkbox" name="" id="" onClick={handleFilterThree} />
      </form>
    </div>
  )
}

export default FilterItem

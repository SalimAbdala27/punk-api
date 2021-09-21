import React from 'react'
import "./CardList.scss"
import Card from '../Card/Card';
const CardList = (props) => {
  const {beers} = props;
  return (
    <div className="cardList">
      {beers.map(beer => {
        return(
          <div key={beer.id}><Card beer ={beer}/></div>
        )
      })}
    </div>
  )
}
export default CardList

import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const {name, image_url, description, ph, abv} = props.beer;
  
  
  return (
    <div className="card">
      <div className="card__outer">
        <h2>{name}</h2>
        <img src={image_url} alt="" className="card__image" />
        <p>pH : {ph} abv: {abv}</p>
        <p className="card__desc">{description}</p>
      </div>
      </div>
    )
  }

export default Card

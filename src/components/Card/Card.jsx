import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { results, name } = props;
  return results.map(({name, description, image_url}) => {
    return (
      <div className="card">
        <h2 className="card__heading">{name}</h2>
        <div className="card__imgHolder">
          <img src={image_url} alt="" className="card__image"/>
        </div>
        <div className="card__desc">
          {description}
        </div>
      </div>
    )
  }
  )
}

export default Card

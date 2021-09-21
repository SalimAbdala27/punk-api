import React from 'react'
import Card from '../Card/Card';
import CardList from '../CardList/CardList';
import "./Main.scss"

const Main = (props) => {
  const {beers} = props;
    return (
      <div className="main">
        <CardList beers={beers}/>
      </div>
    )
  }


export default Main

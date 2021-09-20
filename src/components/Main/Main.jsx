import React from 'react'
import Card from '../Card/Card';
import "./Main.scss"

const Main = (props) => {
  const {results} = props;
    return (
      <div className="main">
        <Card results={results}/>
      </div>
    )
  }


export default Main

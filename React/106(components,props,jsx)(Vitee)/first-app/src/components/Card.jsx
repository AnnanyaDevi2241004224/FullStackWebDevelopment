import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtNsWM2Fx7ejIlfuxmsKeHjTBAlFalc00wA&s" alt=""
      style={{border:"2px",borderRadius:"7px"}} width={props.width} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>      
    </div>
  )
}

export default Card

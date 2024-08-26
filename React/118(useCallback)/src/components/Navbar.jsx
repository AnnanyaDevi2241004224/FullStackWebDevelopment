import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,changeadjective}) => {
    console.log("nav bar is rerendered")
  return (
    <div>
      i am a {adjective} navbar
      <button onClick={()=>{changeadjective()}}>{changeadjective()}</button>
    </div>
  )
}

export default memo(Navbar)

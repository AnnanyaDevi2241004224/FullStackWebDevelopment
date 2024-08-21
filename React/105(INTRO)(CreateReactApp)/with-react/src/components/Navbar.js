import React from 'react'

function Navbar(props) {
  return (
    <div>
      <div className="logo">
        {props.logotext}
      </div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact us</li>
      </ul>
    </div>
  )
}

export default Navbar

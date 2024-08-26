##`
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar count={count}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

##2
import React from 'react'
import Button from './Button'

const Navbar = (props) => {
  return (
    <>
    <div>
      Navbar
    </div>
    <Button count={props.count}/>
    </>
    
  )
}

export default Navbar

##3
import React from 'react'
import Component1 from './component1'
const Button = ({count}) => {
  return (
    <div>
        <button><span><Component1 count={count}/></span>I am a button</button>    </div>
  )
}

export default Button
##4
import React from 'react'

const component1 = ({count}) => {
  return (
    <div>{count}</div>
  )
}

export default component1

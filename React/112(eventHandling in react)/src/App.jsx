import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [form, setform] = useState({email:"",phone:""})
  const [form, setform] = useState({})
  // const [name, setname] = useState("virat")
  const handleclick=()=>{
    alert("heyyy cutie Im clicked")
  }
  const handlechange=(e)=>{
    // setname(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
    }
  const mouseover=()=>{
    alert("heyyy cutie Im mouse over")
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click me
        </button>
      </div>
      <div className='red' onMouseOver={mouseover}>
        I am red div guysssss

      </div>
      {/* <input type="text" name="email" value={form.email} onChange={handlechange} />
      <input type="text" name="phone" value={form.phone} onChange={handlechange} /> */}

      <input type="text" name="email" value={form.email?form.email:""} onChange={handlechange} />
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handlechange} />
    </>
  )
}

export default App

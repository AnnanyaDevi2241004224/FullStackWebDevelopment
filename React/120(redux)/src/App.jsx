import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,multiply } from './redux/counter/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      {/* <Navbar count={count}/> */}
      <Navbar />
      <div >
        <button onClick={()=>{ dispatch(decrement())}}>-</button> 
        &ensp;&ensp;currently count is :{count}&ensp;&ensp;
        <button onClick={()=>{ dispatch(increment())}}>+</button><br/>
        <button onClick={()=>{ dispatch(incrementByAmount(6))}}>+6</button><br/>
        <button onClick={()=>{ dispatch(multiply())}}>*2</button>
      </div>
    </>
  )
}

export default App

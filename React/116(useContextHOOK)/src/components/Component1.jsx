import React,{ useContext } from "react"
import { counterContext } from "../context/context"
const component1 = () => {
    const counter=useContext(counterContext)
  return (
    <div>{counter.count}</div>
  )
}

export default component1

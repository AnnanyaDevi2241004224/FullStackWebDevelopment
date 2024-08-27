// "use client"
// import { useState,useEffect } from "react";
import fs from "fs/promises"
export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("heyyyyyyyyyyyyyy")
  let a= fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      I am a component
      {/* {count}<br/>
      <button onClick={()=>{setcount(count+1)}}>click</button> */}
    </div>
  );
}

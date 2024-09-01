// import Image from "next/image";
// import fs from "fs/promises"
"use client"
import submitAction from "@/action/form"
import { useRef } from "react";

export default function Home() {
  let ref=useRef();
  // const submitAction=async(e)=>{
  //   "use server"
  //   console.log(e.get("name"),e.get("add"))
  //    let a= await fs.writeFile("virat.txt",`name= ${e.get("name")}  address=${e.get("add")}`)
  //    console.log(a)
  // }
  return (
   <div>
    {/* <form ref={ref} action={submitAction}> */}
    <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>

      <div className="m-4">
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" className="text-black" />
      </div>
      <div className="m-4">
        <label htmlFor="add">Address:</label>
        <input id="add" name="add" type="text" className="text-black" />
      </div>
      <div className="m-4">
        <button className="border border-white">Submit</button>
      </div>
    </form>
   </div>
  );
}

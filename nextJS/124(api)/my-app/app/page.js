"use client"
import Image from "next/image";

export default function Home() {
  const handleclick= async ()=>{
    let data = {
      name: "Shubham",
      role: "Coder"
    }
    let a = await fetch("/api/add", {

      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res= await a.json();
    console.log("res=",res)
  }
  return (
    
    <div>
      <h1 className="font-bold text-xl">Next.js api routes demo</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

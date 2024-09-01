//  "use server"
//  import fs from "fs/promises"

// export const submitAction=async(e)=>{
   
//     console.log(e.get("name"),e.get("add"))
//      await fs.writeFile("virat.txt",`name= ${e.get("name")}  address=${e.get("add")}`)
//     //  console.log(a)
//   }
"use server";
import fs from "fs/promises";

export default async function  submitAction(e){
  console.log(e.get("name"), e.get("add"));
  let a=await fs.writeFile("virat.txt", `name= ${e.get("name")}  address=${e.get("add")}`);
//   console.log(a)
};




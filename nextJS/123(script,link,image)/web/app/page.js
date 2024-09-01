import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 bg-red-300 relative">
    i am Home
    {/* <img className="mx-auto my-7" src="https://tse1.mm.bing.net/th?id=OIP.2LLIb7-D5BLsKiiUHojgeAHaEc&pid=Api&P=0&h=180" alt="" /> */}
    <Image quality={1}  className="mx-auto my-7 object-contain" fill={true} src="https://tse1.mm.bing.net/th?id=OIP.2LLIb7-D5BLsKiiUHojgeAHaEc&pid=Api&P=0&h=180" alt="" />
    {/* width={100} height={100} */}
    </div>
  );
}

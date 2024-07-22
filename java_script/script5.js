// console.log("Virat is a hacker")
// console.log("Rohit is a hecker")


// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 3000);
// console.log("hiii im between both timeouts")
// setTimeout(() => {
//     console.log("I am inside settimeout 2")
// }, 0);

// console.log("The End")


const fn = () => {
    console.log("Nothing")
  }
  
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
//   const loadScript = (src, callback) => {
//       let sc = document.createElement("script");
//       sc.src = src;
//       console.log(sc);
//       sc.onload = callback("Annnanyaaaaaaa", fn);
//       document.head.append(sc)
//   }
//   loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    console.log(sc);
    sc.onload = () => callback("Annanyaaa", sc); // Correctly assigning a function to onload
    sc.onerror = () => callback(new Error("failed due to some error")); // Correctly assigning a function to onerror
    document.head.append(sc)
}
//   const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     console.log(sc);
//     sc.onload = callback("Annnanyaaaaaaa", fn);
//     document.head.append(sc)
//     sc.onerror=callback(new Error("failed due to some error "))

// }
loadScript("https://invalid-url.com/prism.min.js",function(error,script)
{
    if(error)
    {
        console.log("error  handling is done")
    }
    else{
        console.log("no error")
    }
});


let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif";
document.body.append(img)
img.onload = function() {
  alert(`Image loaded, size ${img.width}x${img.height}`);
};

img.onerror = function() {
  alert("Error occurred while loading image");
};
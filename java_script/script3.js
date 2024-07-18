let boxes = document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor = "red"
document.getElementById("redbox").style.backgroundColor = "red"
console.log(document.querySelector(".box"))
console.log(document.querySelectorAll(".box"))

document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "yellow";
}) 
console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("div")[3].matches("#redbox"))
console.log(document.getElementsByTagName("div")[4].matches("#redbox"))
console.log(document.getElementsByTagName("div")[3].closest("#redbox"))
console.log(document.getElementsByTagName("div")[3].closest(".container"))
console.log(document.querySelector("body").contains(document.querySelector(".container")))
console.log(document.querySelector(".container").contains(document.querySelector("body")))

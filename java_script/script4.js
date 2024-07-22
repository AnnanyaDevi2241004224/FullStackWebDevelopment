let btn=document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",()=>
{
    // alert("hello ")
    document.querySelector(".box").innerHTML="<p>hiiiiiiii all <b>annanya here </b></p>";
});
btn.addEventListener("dblclick", () => {
    const rndCol = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() *256)} ${Math.floor(Math.random() * 256)})`;
    console.log(rndCol);
    document.body.style.backgroundColor =rndCol;
  });
  btn.addEventListener("contextmenu",()=>
{
    //right click
    document.querySelector(".box").style.backgroundColor="red";
});


const password = document.querySelector('input[type="password"]');
password.addEventListener("focus", (e) => {
  e.target.style.background = "pink";
});
password.addEventListener("blur", (e) => {
  e.target.style.background = "aqua";
});
document.addEventListener("keydown",(e)=>
{
    //keyup
    console.log(e.key,"  ",e.keyCode);
});
let division=document.querySelector(".new");
division.addEventListener("mouseenter",()=>
{
    division.style.backgroundColor="aqua";
});
division.addEventListener("mouseleave",()=>
    {
        division.style.backgroundColor="tomato";
    });

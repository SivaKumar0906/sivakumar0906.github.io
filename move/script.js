let oneGuy=document.getElementById("actual-box")
let fiveStar=document.querySelectorAll("button")
let ramiz=document.querySelector("p")
let wonderman=document.getElementById("main-div")
let strom=document.getElementById("its")
let fine=document.querySelector("body")
fiveStar[3].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetLeft
rainoneGuy=rainoneGuy+50+"px"
oneGuy.style.left=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="600ms"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
strom.style.color="white"
let randomColor = Math.floor(Math.random()*16777215).toString(16);
fine.style.backgroundColor = "#" + randomColor;
})
fiveStar[2].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetTop
rainoneGuy=rainoneGuy+50+"px"
oneGuy.style.top=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="600ms"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
strom.style.color="white"
let randomColor = Math.floor(Math.random()*16777215).toString(16);
fine.style.backgroundColor = "#" + randomColor;
})
fiveStar[1].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetLeft
rainoneGuy=rainoneGuy-50+"px"
oneGuy.style.left=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="600ms"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
strom.style.color="white"
let randomColor = Math.floor(Math.random()*16777215).toString(16);
fine.style.backgroundColor = "#" + randomColor;
})
fiveStar[0].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetTop
rainoneGuy=rainoneGuy-50+"px"
oneGuy.style.top=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="600ms"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
strom.style.color="white"
let randomColor = Math.floor(Math.random()*16777215).toString(16);
fine.style.backgroundColor = "#" + randomColor;
})







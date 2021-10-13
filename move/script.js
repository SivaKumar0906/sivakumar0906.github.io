let oneGuy=document.getElementById("actual-box")
let fiveStar=document.querySelectorAll("button")
let ramiz=document.querySelector("p")
let wonderman=document.getElementById("main-div")
let strom=document.getElementById("its")
fiveStar[3].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetLeft
rainoneGuy=rainoneGuy+50+"px"
oneGuy.style.left=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="800ms"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
wonderman.style.background="#fbeec1"
strom.style.color="white"
oneGuy.style.transform="rotate(360deg)";
})
fiveStar[2].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetTop
rainoneGuy=rainoneGuy+50+"px"
oneGuy.style.top=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="1S"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
wonderman.style.background="#fbeec1"
strom.style.color="white"
oneGuy.style.transform="rotate(270deg)";
})
fiveStar[1].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetLeft
rainoneGuy=rainoneGuy-50+"px"
oneGuy.style.left=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="1S"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
wonderman.style.background="#fbeec1"
strom.style.color="white"
oneGuy.style.transform="rotate(180deg)";
})
fiveStar[0].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetTop
rainoneGuy=rainoneGuy-50+"px"
oneGuy.style.top=rainoneGuy;
oneGuy.style.borderRadius="50%"
oneGuy.style.transition="1S"
oneGuy.style.backgroundColor="#1877f2"
ramiz.style.color="black"
wonderman.style.background="#fbeec1"
strom.style.color="white"
oneGuy.style.transform="rotate(90deg)";
})




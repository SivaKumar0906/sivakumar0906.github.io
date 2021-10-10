let oneGuy=document.getElementById("actual-box")
let fiveStar=document.querySelectorAll("button")
fiveStar[0].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetLeft
rainoneGuy=rainoneGuy-50+"px"
oneGuy.style.left=rainoneGuy;
})
fiveStar[1].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetLeft
rainoneGuy=rainoneGuy+50+"px"
oneGuy.style.left=rainoneGuy;
})
fiveStar[2].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetTop
rainoneGuy=rainoneGuy+50+"px"
oneGuy.style.top=rainoneGuy;
})
fiveStar[3].addEventListener("click",function(){
let rainoneGuy=oneGuy.offsetTop
rainoneGuy=rainoneGuy-50+"px"
oneGuy.style.top=rainoneGuy;
})


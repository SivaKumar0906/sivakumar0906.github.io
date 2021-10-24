let moveButton=document.getElementById("pla-y")
let stopButton=document.getElementById("pla-z")
let stackofArray=[2,4,8,16,32]
let okI=document.getElementById("main-div")
let increaseNUmber=document.getElementById("number")
let one=1;
let two=5;


moveButton.addEventListener("click",function(){       
let TrandomColor=Math.floor(Math.random()*256**3).toString(16)
moveButton.style.backgroundColor="#"+TrandomColor
})

stopButton.addEventListener("click",function(){
let noTrandomColor=Math.floor(Math.random()*256**3).toString(16)
stopButton.style.backgroundColor="#"+noTrandomColor
increaseNUmber.innerHTML=--one;
})

moveButton.addEventListener("click",function(){
increaseNUmber.innerHTML=one++
for(let siva=0;siva<stackofArray.length;siva++){
let fine=document.createElement("div")
fine.classList.add("try-it")
okI.appendChild(fine)
let randomColor=Math.floor(Math.random()*256**3).toString(16)
fine.style.backgroundColor="#"+randomColor
fine.innerHTML=stackofArray[siva]
console.log(stackofArray[siva])
moveButton.disable=true
}
})



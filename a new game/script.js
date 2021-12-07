let bunchofArrays= ["",
"1. Hyper Text Mark Up language",
"  2. Hyper Text markiplier language",
"3. It's not a programming language",
 ' 4. Looser learning web development(web development is not actual programming looser']

 let answer=document.getElementById("answer")
 let submit=document.getElementById("submit")
 let header=document.getElementById("header")
 let hint=document.getElementById("hint")

let siva=()=>{
if(bunchofArrays[answer.value]===bunchofArrays[1]){
header.innerHTML="True, you will get a job at FAANG (FACEBOOK, APPLE, AMAZON, GOOGLE, NETFLIX PACKAGE OF 180K$"
}else{
header.innerHTML="False, you won't get a job at FAANG (FACEBOOK, APPLE, AMAZON, GOOGLE, NETFLIX OF 180K$"
}
if(answer.value < 1 | answer.value > 4){
header.innerHTML="Choose between 1-4"
}
}
submit.onclick=siva


let hiNt=()=>{
header.innerHTML="8251651820524201311811211812114721175".split("").reverse().join("")
}
hint.onclick=hiNt
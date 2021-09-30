const newMan=document.querySelector(".not-acalc")
const arRay=[["1","2","3","+"],["4","5","6","-"],["7","8","9","*"],["C","0","=","/"]]
const opeRatir=["+","-","*","/"]
let forOutput;
document.addEventListener("DOMContentLoaded",function(){
forOutput=document.createElement("div")
// console.log(forOutput)
forOutput.innerHTML="0";
forOutput.classList.add("test-pass")
newMan.appendChild(forOutput) 
for(let y=0;y<arRay.length;y++){
let ouTpuT=document.createElement("div")
ouTpuT.classList.add("test-notpassed")
for(let x=0;x<arRay[y].length;x++){
// console.log(arRay[y][x])
let btn=document.createElement("div");
btn.innerHTML=arRay[y][x];
btn.classList.add("not-abtn")
btn.addEventListener("click",heDidnsaid)
ouTpuT.appendChild(btn)
}
newMan.appendChild(ouTpuT)
// console.log(ouTpuT)
}
})
function heDidnsaid(e){
let idonTknow=this.innerHTML;
// console.log(idonTknow)
let myClac=forOutput.innerHTML;
if(myClac=="0"){
myClac=""
}
if(idonTknow=="="){
myClac=eval(myClac)
}else{
let firstChar=myClac.substring(myClac.length-1)
console.log(firstChar )
if(opeRatir.includes(idonTknow)){
if(opeRatir.includes(firstChar)){
myClac=myClac.substring(0,myClac.length-1);
}else{
myClac=eval(myClac)
}
}
myClac=myClac+idonTknow;
} 
if(idonTknow=="C"){
myClac=0;
}
forOutput.innerHTML=myClac;
}

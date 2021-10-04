const seleCting=document.querySelector(".nine")
const notseleCting=document.querySelector(".ten")
const moreseleCting=document.querySelector("button");
const nomoreSelecting=document.querySelector(".ran")
moreseleCting.addEventListener("click",function(){
let sUn=seleCting.value;
console.log(sUn);
let retriVe=/([A-Za-z0-9]+@gmail.com)+/g;
let daTa=sUn.match(retriVe)
console.log(daTa)
notseleCting.innerHTML=daTa;
nomoreSelecting.innerHTML="how many retrieve mails are:"+daTa.length;
})
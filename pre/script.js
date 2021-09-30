const siVa=document.querySelector('button')
const sai=document.querySelector(".output")
const kuMar=document.querySelector("input")
siVa.innerHTML="Enter your bill"
siVa.addEventListener("click" ,function(){
console.log(kuMar.value*0.5)
sai.innerText="oh snap, my braincells kind off falling!"
let notaNewthing=(kuMar.value*0.5).toFixed(2)
let newThing='You should tip ₹'+notaNewthing+' on ₹'+kuMar.value+'';
sai.innerText=newThing
})

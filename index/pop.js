const seLecting=document.querySelectorAll(".same-class");
const shouLd=document.querySelector(".main-shit")
const tryIng=document.querySelector(".could-bemain")
const againTrying=document.querySelector(".not-main")
// console.log(seLecting)
againTrying.addEventListener("click",function(){
shouLd.classList.add("display-hide");
})

for(let siva=0;siva<seLecting.length;siva++){
// console.log(seLecting[siva]);
seLecting[siva].addEventListener("click",function(){
let niCe=this.getAttribute("data-message");
js(niCe)
})
}
function js(kind){
shouLd.classList.remove("display-hide");
tryIng.innerHTML=kind;
}

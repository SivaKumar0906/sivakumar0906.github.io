let date=document.getElementById("date")
let month=document.getElementById("month")
let year=document.getElementById("year")
const caluClate=document.getElementById("click-it")
let showTheresult=document.getElementById("for-result")

caluClate.addEventListener("click",function(){
let findtheWeek=new Date(date.value.concat(month.value+year.value))
let get=findtheWeek.getDay()
if(get===0){
showTheresult.innerHTML="Sunday"
}else if(get===1){
showTheresult.innerHTML="Monday"
}else if(get===2){
showTheresult.innerHTML="Tuesday"
}
else if(get===3){
showTheresult.innerHTML="Wednesday"
}
else if(get===4){
showTheresult.innerHTML="Thursday"
}
else if(get===5){
showTheresult.innerHTML="Friday"
}
else if(get===6){
showTheresult.innerHTML="Satuarday"
}
})




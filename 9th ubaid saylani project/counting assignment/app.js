var numbering = document.querySelector('.numbering')
var decreasing = document.querySelector('#decreasing')
var reseting = document.querySelector('#reseting')
var increasing = document.querySelector('#increasing')
var neutralColor = document.querySelector('.neutralcolor');
var greencolor = document.querySelector('.greencolor');
var redcolor = document.querySelector('.redcolor');

increasing.addEventListener("click", ()=>{
    number.textContent = ++number.textContent;
    countingnumber();
})
decreasing.addEventListener("click", ()=>{
    number.textContent = --number.textContent;
    countingnumber();
})
reseting.addEventListener("click",()=>{
    number.textContent = 00;
    countingnumber();
})



function countingnumber(){

if(number.innerHTML == 0){
    number.style.color = "black"
}
else if(number.textContent >= 1){
    number.style.color = "green"
}
else if(number.textContent <= -1){
    number.style.color = "red"
}
}
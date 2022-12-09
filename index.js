
// slider and value const


const valueOutRed = document.getElementById('value-out-red'); 
const sliderRed = document.getElementById("slider-red"); 


const valueOutGreen = document.getElementById('value-out-green'); 
const sliderGreen = document.getElementById("slider-green"); 

const valueOutBlue = document.getElementById('value-out-blue'); 
const sliderBlue = document.getElementById("slider-blue"); 




//Stating the value 
sliderRed.oninput = function(){
    valueOutRed.innerHTML = sliderRed.value;
} 

sliderGreen.oninput = function(){
    valueOutGreen.innerHTML = sliderGreen.value;
} 
sliderBlue.oninput = function(){
    valueOutBlue.innerHTML = sliderBlue.value;
} 



//function for callback for eventlistner 
function color(){
    let red = document.getElementById("slider-red").value; 
    let green = document.getElementById("slider-green").value;  
    let blue = document.getElementById('slider-blue').value;
    let colorChange = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
    document.body.style.background = colorChange; 
    document.getElementById('color-change').innerHTML = `rgb( ${red}, ${green}, ${blue}) `

}

// event listeners for color inputs 
sliderRed.addEventListener('input', color); 
sliderGreen.addEventListener('input', color); 
sliderBlue.addEventListener('input', color); 


// Randon button event listner 


function randomDraw() { 
let random= Math.floor(Math.random() * (255 - 1)) + 1; 
let colorChange = 'rgb(' + random + ',' + random + ',' + random + ')'; 
document.body.style.background = colorChange; 
console.log(random); 

}; 

document.getElementById('random-btn').addEventListener('click', randomDraw())




    

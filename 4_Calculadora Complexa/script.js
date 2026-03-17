// thanks to Bro Code on Youtube for making this script possible cuz I can't do ts on my own

let display = document.getElementById("display");
let form = document.getElementById("form");

function numAppendToDisplay(input){
    display.value += input;

    console.log(display.value);
};

function aPiToDisplay(){
    display.value += Math.PI.toFixed(6);

    console.log(display.value);
}

function opAppendToDisplay(input){
    display.value += input;

    console.log(display.value);
};

function modul(){
    display.value += "%";
    
    console.log(display.value);
};

function clearAll(){
    display.value = "";
    
    console.log(display.value);
};

function clearLast(){
    display.value = display.value.slice(0, -1);

    console.log(display.value);
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    calculate();
    //thanks xJavaScript.com
});
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erro"
    };

    console.log(display.value);
};
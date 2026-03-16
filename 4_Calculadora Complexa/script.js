// thanks to Bro Code on Youtube for making this script possible cuz I can't do ts on my own

let display = document.getElementById("display");
let ans = "";

function numAppendToDisplay(input){
    display.value += input;
    display.placeholder +=input;

    console.log(display.placeholder);
};

function aPiToDisplay(){
    display.value += Math.PI.toFixed(6);
    display.placeholder +=Math.PI.toFixed(6);

    console.log(display.placeholder);
}

function opAppendToDisplay(input){
    display.value += input;
    display.placeholder +=input;

    console.log(display.placeholder);
};

function percent(){
    display.value += "%";
    display.placeholder += "/100";
    calculate();
    
    console.log(display.placeholder);
};

function clearAll(){
    display.value = "";
    display.placeholder="";
    let ans="0";
    
    console.log(display.placeholder);
};

function clearLast(){
    display.value = display.value.slice(0, -1);
    display.placeholder = display.placeholder.slice(0, -1);

    console.log(display.placeholder);
};

function calculate(){
    try{
        display.value = eval(display.placeholder);
        display.placeholder = display.value
    }
    catch(error){
        display.value = "Erro"
    };

    console.log(display.placeholder);
};
// thanks to Bro Code on Youtube for making this script possible cuz I can't do ts on my own

let display = document.getElementById("display");
let ans = "";
let count = 0;

function numAppendToDisplay(input){
    display.value += input;
    display.placeholder +=input;
    count++;

    console.log(display.placeholder);
};

function opAppendToDisplay(input){
    display.value += input;
    display.placeholder +=input;
    count++;

    console.log(display.placeholder);
};

function percent(){
    display.value += "%";
    display.placeholder += display.placeholder + "/100";
    count++;
    
    console.log(display.placeholder);
};

function expAppendToDisplay(){
    display.value += "^";
    display.placeholder += "**";
    count++;
    count++;

    console.log(count);
    console.log(display.placeholder);
};
function sqrtAppendToDisplay(){
    display.placeholder += "**(1/2)";
    display.value = eval(display.placeholder);
    let count = display.value.length;
    
    console.log(display.placeholder);
}

function clearAll(){
    display.value = "";
    display.placeholder="";
    let ans="0";
    let count=0;
    
    console.log(display.placeholder);
};

function clearLast(){
    display.value = display.value.slice(0, -1);
    display.placeholder = display.placeholder.slice(0, -1);
    console.log(display.placeholder.at(count-2));
    if (display.placeholder.at(count-2) === "*" ){
        display.placeholder = display.placeholder.slice(0, -1);
    };

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
    let ans= display.value;
    let lastInput= "calc";
    let count = display.placeholder.length;

    console.log(display.placeholder);
};
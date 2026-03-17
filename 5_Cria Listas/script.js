let userInp = document.getElementById("input").value;
let count = 0;

function createStuff(){
    let userInp = document.getElementById("input").value;
    if (userInp === ""){
        document.getElementById("span").innerHTML = "Por favor, insira alguma informação."
    } else{
        document.getElementById("span").innerHTML = ""

        let argument= "<li id='" + count + "'><p>" + userInp + "</p><button onclick='selfDelete(" + count + ")'>X</button>";
        document.getElementById("groupStuff").insertAdjacentHTML("beforeend", argument);
        count++;
    };
};

function selfDelete(input){
    console.log(input);
    let parent = document.getElementById(input);
    parent.remove();
};
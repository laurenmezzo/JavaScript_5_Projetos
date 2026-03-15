const btnSub = document.getElementById("sub");

btnSub.addEventListener("click", () =>{
    let height = document.getElementById("height").value;
    let mass = document.getElementById("mass").value;
    let intHeight = parseInt(height)/100;
    let intMass = parseFloat(mass);
    let bmi = intMass/(Math.pow(intHeight, 2));

    document.getElementById("span1").innerText = "Seu IMC é: "+bmi.toFixed(2);

    if (bmi < 18.5 && bmi > 0){
        document.getElementById("span2").innerText = "Você está abaixo do peso."
    } else if (18.5 <= bmi && bmi < 25){
         document.getElementById("span2").innerText = "Você tem um peso normal."
    } else if (25 <= bmi && bmi < 30){
         document.getElementById("span2").innerText = "Você está sobrepeso."
    } else if (30 <= bmi && bmi < 35){
         document.getElementById("span2").innerText = "Você está com obesidade grau I."
    } else if (35 <= bmi && bmi < 40){
         document.getElementById("span2").innerText = "Você está com obesidade grau II."
    } else if (bmi >= 40) {
         document.getElementById("span2").innerText = "Você está com obesidade mórbida."
    } else {
        document.getElementById("span2").innerText = "Insira dados válidos."
    };
});
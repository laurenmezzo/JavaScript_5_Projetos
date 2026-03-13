const btnSub = document.getElementById("sub");

btnSub.addEventListener("click", () =>{
    let height = document.getElementById("height").value;
    let mass = document.getElementById("mass").value;
    let intHeight = parseInt(height)/100;
    let intMass = parseInt(mass);
    let bmi = intMass/(Math.pow(intHeight, 2));
    document.getElementById("span1").innerText = "Seu IMC é: "+bmi.toFixed(2);
});
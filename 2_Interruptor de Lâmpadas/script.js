const btnOn = document.getElementById("on");
const btnOff = document.getElementById("off");
const lamp = document.getElementById("lamp");
let contaClicks = 0;

btnOn.addEventListener("click", () =>{
    lamp.classList.add("lampOn");
    lamp.classList.remove("lampOff");
    contaClicks++;
    console.log(contaClicks);
});

btnOff.addEventListener("click", () => {
    lamp.classList.add("lampOff");
    lamp.classList.remove("lampOn");
    contaClicks++;
    console.log(contaClicks);
});

if (contaClicks > 20){
    classList.add("lampBreak");
    classList.remove("lampOn");
    classList.remove("lampOff");
    //adicionar texto dizendo "vc quebrou a lampada :("
};
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
let numCount = 0;
let priceCount = 0;

btnPlus.addEventListener("click", () =>{
    ++numCount;
    priceCount = priceCount+67.00;
    document.getElementById("numCount").innerHTML = numCount;
    document.getElementById("priceCount").innerHTML = "R$:"+priceCount.toFixed(2);
    btnMinus.classList.add("active");
    btnMinus.classList.remove("inactive");
    console.log(numCount);
});

btnMinus.addEventListener("click", () =>{
    if (numCount > 1){
        --numCount;
        priceCount = priceCount-67.00;
        document.getElementById("numCount").innerHTML = numCount;
        document.getElementById("priceCount").innerHTML = "R$:"+priceCount.toFixed(2);
        
    } else if (numCount === 1){
        --numCount;
        priceCount = priceCount-67.00;
        document.getElementById("numCount").innerHTML = numCount;
        document.getElementById("priceCount").innerHTML = "R$:"+priceCount.toFixed(2);
        btnMinus.classList.add("inactive");
        btnMinus.classList.remove("active");
    } else if (numCount < 1){
        btnMinus.classList.add("inactive");
        btnMinus.classList.remove("active");
    };
    console.log(numCount);
});
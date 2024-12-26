let a;
let b;
let c;
let price;
let amount;
let m3;

    //IF THE USER TYPES DECIMAL NUMBER AND DOESN'T USE "." THE PROGRAM WOULDN'T WORK!!!

document.getElementById("submit").onclick = function(){
    
    a = document.getElementById("a").value;
    a = Number(a);
    a = a * 0.01;
    console.log(a, typeof a);

    b = document.getElementById("b").value;
    b = Number(b);
    b = b * 0.01;
    console.log(b, typeof b);

    c = document.getElementById("c").value;
    c = Number(c);
    console.log(c, typeof c);

    amount = document.getElementById("amount").value;
    amount = Number(amount);
    console.log(amount, typeof amount);

    price = document.getElementById("price").value;
    price = Number(price);
    console.log(price, typeof price);

    m3 = a * b * c * amount;
    price = price * m3;

    price = price.toFixed(2);
    m3 = m3.toFixed(2);

    //price = Math.floor(price);

    document.getElementById("result").textContent = `Кубатура: ${m3} м3`;
    document.getElementById("priceElement").textContent = `Цена: ${price} лв.`;
}
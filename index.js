let a;
let b;
let c;
let price;
let amount;
let m3;

document.getElementById("submit").onclick = function(){
    
    a = document.getElementById("a").value;
    a = a.replace("," , ".")
    console.log(a);
    a = Number(a);
    a = a * 0.01;
    console.log(a, typeof a);

    b = document.getElementById("b").value;
    b = b.replace("," , ".")
    b = Number(b);
    b = b * 0.01;
    console.log(b, typeof b);

    c = document.getElementById("c").value;
    c = c.replace("," , ".")
    c = Number(c);
    console.log(c, typeof c);

    amount = document.getElementById("amount").value;
    amount = amount.replace("," , ".")
    amount = Number(amount);
    console.log(amount, typeof amount);

    price = document.getElementById("price").value;
    price = price.replace("," , ".")
    price = Number(price);
    console.log(price, typeof price);

    m3 = a * b * c * amount;
    price = price * m3;

    price = price.toFixed(2);
    m3 = m3.toFixed(3);

    if(document.querySelector("#includeDDS").checked){
        price *= 1.20;
         
    }

    //price = Math.floor(price);

    document.getElementById("result").textContent = `Кубатура: ${m3} м3`;
    document.getElementById("priceElement").textContent = `Цена: ${price} лв.`;
}
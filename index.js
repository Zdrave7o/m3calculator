let a;
let b;
let c;
let amount;
let m3;

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

    m3 = a * b * c * amount;
    document.getElementById("result").textContent = `Кубатурата е ${m3} м3`
}
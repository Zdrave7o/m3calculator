let a;
let b;
let c;
let price;
let amount;
let m3;
let sumM3 = [];
let sumPrice = [];

let entry = [];
let entryNum = 0;

document.getElementById("submit").onclick = function () {

    a = document.getElementById("a").value;
    a = a.replace(",", ".")
    console.log(a);
    a = Number(a);
    a = a * 0.01;
    console.log(a, typeof a);

    b = document.getElementById("b").value;
    b = b.replace(",", ".")
    b = Number(b);
    b = b * 0.01;
    console.log(b, typeof b);

    c = document.getElementById("c").value;
    c = c.replace(",", ".")
    c = Number(c);
    console.log(c, typeof c);

    amount = document.getElementById("amount").value;
    amount = amount.replace(",", ".")
    amount = Number(amount);
    console.log(amount, typeof amount);

    price = document.getElementById("price").value;
    price = price.replace(",", ".")
    price = Number(price);
    console.log(price, typeof price);

    m3 = a * b * c * amount;
    price = price * m3;

    m3 = m3.toFixed(3);

    if (document.querySelector("#includeDDS").checked) {
        price *= 1.20;

    }

    price = price.toFixed(2);

    //price = Math.floor(price);
    document.getElementById("result").textContent = `Кубатура: ${m3} м3`;
    document.getElementById("priceElement").textContent = `Цена: ${price} лв.`;

    sumM3.push(Number(m3));
    sumPrice.push(Number(price));

    entry.push(`Ширина:${a}; Височина:${b}; Дължина${c}; Кубатура:${m3}; Цена${price}`);
    let entriesDisplay = document.querySelector(".entries")
    displayEntries(entry);

    function displayEntries(entry) {
        entryNum++;
        entriesDisplay.innerHTML += `<div class="entry">
                                            <h2 id="number">Вход Номер: ${entryNum}</h2>
                                            <div class="items-display">
                                                <p>Ширина: ${a * 100}cm;</p>
                                                <p>Височина: ${b * 100}cm;</p>
                                                <p>Дължина: ${c}m;</p>
                                                <p>Кубатура: ${m3};</p>
                                                <p>Цена: ${price}</p>
                                            </div>
                                        </div>`;

    }

}

function summarizeM3(sumM3) {
    let sum = 0;
    for (let i = 0; i < sumM3.length; i++) {
        sum += Number(sumM3[i]);
    }

    document.querySelector("#sumM3display").textContent = `Обща кубатура: ${sum.toFixed(3)}`;
}

function summarizePrice(sumPrice){
    let sum = 0;
    for (let i = 0; i < sumM3.length; i++) {
        sum += Number(sumPrice[i]);
    }

    document.querySelector("#sumPricedisplay").textContent = `Обща цена: ${sum.toFixed(2)}`;
}


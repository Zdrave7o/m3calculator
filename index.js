let a;
let b;
let c;
let price;
let amount;
let m3;
let sumM3 = [];
let sumPrice = [];
const dailyEntries = [];

let entry = [];
let entryNum = 0;

function calcM3() {
    a = document.getElementById("a").value;
    a = a.replace(",", ".")
    a = Number(a);
    a = a * 0.01;

    b = document.getElementById("b").value;
    b = b.replace(",", ".")
    b = Number(b);
    b = b * 0.01;

    c = document.getElementById("c").value;
    c = c.replace(",", ".")
    c = Number(c);

    amount = document.getElementById("amount").value;
    amount = amount.replace(",", ".")
    amount = Number(amount);

    price = document.getElementById("price").value;
    price = price.replace(",", ".")
    price = Number(price);

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
                                                <p>Ширина: ${(a * 100).toFixed(2)}cm;</p>
                                                <p>Височина: ${(b * 100).toFixed(2)}cm;</p>
                                                <p>Дължина: ${(c).toFixed(2)}m;</p>
                                                <p>Бройка: ${amount}</p>
                                                <p>Кубатура: ${m3};</p>
                                                <p>Цена: ${price}</p>
                                            </div>
                                        </div>`;

    }

    addToDaily(m3, price);
}

document.getElementById("submit").onclick = calcM3

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
let storedEntries = JSON.parse(localStorage.getItem("entries")) || [];

function addToDaily(m3, price) {
    const today = new Date().toISOString().split('T')[0];
    const dailyEntry = {
        date: today,
        m3: m3,
        price: price
    };
    

    storedEntries.push(dailyEntry);
    localStorage.setItem("entries", JSON.stringify(storedEntries));

}

function displayDailyEntries(dailyEntries){
    dailyEntries = JSON.parse(localStorage.getItem("entries")) || [];
    let entriesDisplay = document.querySelector(".all-entries");
    entriesDisplay.innerHTML = "";
    dailyEntries.forEach(entry => {
        entriesDisplay.innerHTML += `<div class="entry">
                                            <div class="items-display">
                                                <p>Дата: ${entry.date}</p>
                                                <p>Кубатура: ${entry.m3} м3</p>
                                                <p>Цена: ${entry.price} лв.</p>
                                            </div>
                                        </div>`;
    });

    document.querySelector(".all-entries-bg").style.display = "flex";
    document.querySelector(".main").style.display = "none";
}

//debbuging purpose
function clearEntries() {
    localStorage.removeItem("entries");
}



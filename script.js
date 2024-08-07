"use strict";
const billAmountEl = document.getElementById("billAmount");
const tipPercentageEl = document.getElementById("tipPercentage");
const peopleAmountEl = document.getElementById("peopleAmount");
const tipAmountEl = document.getElementById("tipAmount");
const totalAmountEl = document.getElementById("totalAmount");
const resetButtonEl = document.getElementById("resetButton");
const selectEls = document.querySelectorAll(".select");
let givenPercentage = 0;
const calculateTip = () => {
    const givenBill = Number(billAmountEl?.value);
    // const givenPercentage = Number(tipPercentageEl.value);
    const givenPeople = Number(peopleAmountEl?.value);
    if (givenPeople > 0) {
        const tipAmount = ((givenBill * givenPercentage) / 100) / givenPeople;
        const totalAmount = (givenBill + ((givenBill * givenPercentage) / 100)) / givenPeople;
        tipAmountEl.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
    }
    else {
        tipAmountEl.textContent = "$0.00";
        totalAmountEl.textContent = "$0.00";
    }
};
selectEls.forEach((item) => {
    item.addEventListener("click", () => {
        tipPercentageEl.value = "";
        givenPercentage = Number(item.value);
        calculateTip();
    });
});
tipPercentageEl.addEventListener("input", () => {
    givenPercentage = Number(tipPercentageEl.value);
    calculateTip();
});
window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        calculateTip();
    }
});
resetButtonEl.addEventListener("click", () => {
    billAmountEl.value = "";
    tipPercentageEl.value = "";
    peopleAmountEl.value = "";
    tipAmountEl.textContent = "$0.00";
    totalAmountEl.textContent = "$0.00";
    // givenPercentage = 0;
});

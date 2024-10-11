"use strict";

const billAmountEl = document.getElementById("billAmount") as HTMLInputElement | null;
const tipPercentageEl = document.getElementById("tipPercentage") as HTMLInputElement | null;
const peopleAmountEl = document.getElementById("peopleAmount") as HTMLInputElement | null;
const tipAmountEl = document.getElementById("tipAmount") as HTMLElement | null;
const totalAmountEl = document.getElementById("totalAmount") as HTMLElement | null;
const resetButtonEl = document.getElementById("resetButton") as HTMLButtonElement | null;
const selectEls = document.querySelectorAll(".select") as NodeListOf<HTMLButtonElement>;

let givenPercentage: number = 0;

const calculateTip = (): void => {
    const givenBill = Number(billAmountEl?.value);
    const givenPeople = Number(peopleAmountEl?.value);

    if (givenPeople > 0 && billAmountEl && peopleAmountEl && tipAmountEl && totalAmountEl) {
        const tipAmount = ((givenBill * givenPercentage) / 100) / givenPeople;
        const totalAmount = (givenBill + ((givenBill * givenPercentage) / 100)) / givenPeople;
        tipAmountEl.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
    } else if (tipAmountEl && totalAmountEl) {
        tipAmountEl.textContent = "$0.00";
        totalAmountEl.textContent = "$0.00";
    }
};

selectEls.forEach((item) => {
    item.addEventListener("click", () => {
        if (tipPercentageEl) {
            tipPercentageEl.value = "";
        }
        givenPercentage = Number(item.value);
        calculateTip();
    });
});

tipPercentageEl?.addEventListener("input", () => {
    givenPercentage = Number(tipPercentageEl?.value);
    calculateTip();
});

window.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        calculateTip();
    }
});

resetButtonEl?.addEventListener("click", () => {
    if (billAmountEl) billAmountEl.value = "";
    if (tipPercentageEl) tipPercentageEl.value = "";
    if (peopleAmountEl) peopleAmountEl.value = "";
    if (tipAmountEl) tipAmountEl.textContent = "$0.00";
    if (totalAmountEl) totalAmountEl.textContent = "$0.00";
});

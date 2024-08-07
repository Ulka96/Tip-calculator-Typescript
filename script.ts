
const billAmountEl = document.getElementById("billAmount") as HTMLInputElement;
const tipPercentageEl = document.getElementById("tipPercentage") as HTMLInputElement;
const peopleAmountEl = document.getElementById("peopleAmount") as HTMLInputElement;

const tipAmountEl = document.getElementById("tipAmount") as HTMLElement;
const totalAmountEl = document.getElementById("totalAmount") as HTMLElement;

const resetButtonEl = document.getElementById("resetButton") as HTMLButtonElement;

const selectEls = document.querySelectorAll<HTMLSelectElement>(".select");

let givenPercentage:number = 0;


const calculateTip = ():void => {
  const givenBill:number = Number(billAmountEl?.value);
  // const givenPercentage = Number(tipPercentageEl.value);
  const givenPeople:number = Number(peopleAmountEl?.value);

  
  if (givenPeople > 0) {
  const tipAmount:number = ((givenBill * givenPercentage)/100) / givenPeople;
  const totalAmount:number = (givenBill + ((givenBill * givenPercentage)/100)) / givenPeople;
  
  tipAmountEl.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
  }
  else {
    tipAmountEl.textContent = "$0.00";
    totalAmountEl.textContent = "$0.00";
  }

}

selectEls.forEach((item) =>{
  item.addEventListener("click", () =>{
    tipPercentageEl.value = "";
    givenPercentage = Number(item.value);
    calculateTip();
  })
 })

 tipPercentageEl.addEventListener("input", () => {
  givenPercentage = Number(tipPercentageEl.value);
  calculateTip();
});



window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    calculateTip();
  }
});


resetButtonEl.addEventListener("click", () =>{

  billAmountEl.value = "";
  tipPercentageEl.value = "";
  peopleAmountEl.value = "";
  tipAmountEl.textContent = "$0.00";
  totalAmountEl.textContent = "$0.00";
  // givenPercentage = 0;

});

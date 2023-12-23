let bill_El = document.getElementById("bill");
let Tip_El = document.getElementById("tip");
let Btn = document.getElementById("calculate");
let total_El = document.getElementById("total");


Btn.addEventListener("click",function(){
let bill = parseFloat(bill_El.value);
let tip = parseFloat(Tip_El.value);
if (isNaN(bill) || isNaN(tip)) {
  alert("Please enter valid numeric values for bill and tip.");
    return;
   }

let TipAmount = bill * (tip / 100);
let TotalBill = bill + TipAmount;
total_El.innerText = TotalBill.toFixed(2) + " PHP";
bill_El.value = "";
Tip_El.value = "";
});


let main= document.getElementsByClassName("main-container")[0]
let bill = document.getElementById("total");
let tipAmount = document.getElementById("tip-amount");
let tipBill = document.getElementById("tip-bill");
let rangeVal = document.getElementById("range-val");
let tipCal = document.getElementById("tip-cal");
// let tipText = document.getElementById("tip-text")
let actualBill = 0;
rangeVal.value = 0;
// tipText.value=0;
let hold;

function myFunction(){
    startUp();
}

bill.addEventListener("click",startUp)


function startUp(){
    bill.value="";
    rangeVal.value=0;
    tipAmount.value=0;
    tipBill.value=0;
    // tipText.value=0;
    

    bill.onchange=()=>{
        actualBill=parseFloat(bill.value);
        console.log(bill.value,actualBill);
    }

    rangeVal.onchange=()=>{
        tipCal.setAttribute("disabled",true);
        rangeVal.value=rangeVal.value;
        calculate(); 
    }

   tipCal.onchange = function () {
        rangeVal.setAttribute("disabled",true);
        console.log(tipCal.value);        
        rangeVal.value = tipCal.value;
        calculate();      
   }
}
rangeVal.innerHTML = "Tip Given : " + tipCal.value + "%";


function calculate(){
    tipAmount.value =(actualBill*rangeVal.value)/100;
    tipBill.value =parseFloat(actualBill) + parseFloat(tipAmount.value);
    tipAmount.value="$"+tipAmount.value;
    tipBill.value="$"+tipBill.value;
    tipCal.reset();
}
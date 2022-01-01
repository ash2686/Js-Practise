let numOne=document.getElementById("one");
let numTwo=document.getElementById("two");
let numThree=document.getElementById("three");
let numFour=document.getElementById("four");
let numFive=document.getElementById("five");
let numSix=document.getElementById("six");
let numSeven=document.getElementById("seven");
let numEight=document.getElementById("eight");
let numNine=document.getElementById("nine");
let numZero=document.getElementById("zero");
let opPlus=document.getElementById("plus");
let opMinus=document.getElementById("minus");
let opMultiply=document.getElementById("multiply");
let opDivide=document.getElementById("divide");
let equals=document.getElementById("equals");
let dot1=document.getElementById("dot");
let clear=document.getElementById("clear");
let result=document.getElementById("result")
let output;
let num1=0;
let num2=0;
let flag;



numOne.addEventListener("click",display1);
numTwo.addEventListener("click",display2);
numThree.addEventListener("click",display3);
numFour.addEventListener("click",display4);
numFive.addEventListener("click",display5);
numSix.addEventListener("click",display6);
numSeven.addEventListener("click",display7);
numEight.addEventListener("click",display8);
numNine.addEventListener("click",display9);
numZero.addEventListener("click",display0);

opPlus.addEventListener("click",add);
opMinus.addEventListener("click",sub);
opMultiply.addEventListener("click",mul);
opDivide.addEventListener("click",div);

clear.addEventListener("click",cls);
dot1.addEventListener("click",dot)

equals.addEventListener("click",pods);

function display1(){
    console.log("reached javascript");
    result.innerHTML+=numOne.innerHTML;
}

function display2(){
   result.innerHTML+=numTwo.innerHTML;
}

function display3(){
    result.innerHTML+=numThree.innerHTML;
 }

 function display4(){
    result.innerHTML+=numFour.innerHTML;
 }

 function display5(){
    result.innerHTML+=numFive.innerHTML;
 }

 function display6(){
    result.innerHTML+=numSix.innerHTML;
 }

 function display7(){
    result.innerHTML+=numSeven.innerHTML;
 }

 function display8(){
    result.innerHTML+=numEight.innerHTML;
 }

 function display9(){
    result.innerHTML+=numNine.innerHTML;
 }

 function display0(){
    result.innerHTML+=numZero.innerHTML;
 }

 function dot(){
     result.innerHTML+=dot1.innerHTML;
 }

 function add(){
    num1 =  parseFloat(result.innerHTML);
    result.innerHTML+=opPlus.innerHTML;
    result.innerHTML="";
    flag="sum";

 }

 function sub(){
    num1 =  parseFloat(result.innerHTML);
    result.innerHTML+=opPlus.innerHTML;
    result.innerHTML="";
    flag="sub"
 }

 function mul(){
    num1 =  parseFloat(result.innerHTML);
    result.innerHTML+=opPlus.innerHTML;
    result.innerHTML="";
    flag="mul"
 }

 function div(){
    num1 =  parseFloat(result.innerHTML);
    result.innerHTML+=opPlus.innerHTML;
    result.innerHTML="";
    flag="div"
 }

 function cls(){
     result.innerHTML="";
     num1=num2=0;
 }

//  function dot(){

//  }

 function pods(){
     num2=parseFloat(result.innerHTML);
     if(flag==="sum"){result.innerHTML=num1+num2;}
     
     if(flag==="sub"){result.innerHTML=num1-num2;}

     if(flag==="mul"){result.innerHTML=num1*num2;}
     
     if(flag==="div"){result.innerHTML=num1/num2;}
 }
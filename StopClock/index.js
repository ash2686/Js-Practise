let result = document.getElementsByClassName("result")[0];
let start = document.getElementById("startClock");
let stop = document.getElementById("stopClock");
let reset = document.getElementById("resetClock");
let stp = document.getElementById("stp");

console.log(stp);
let counter = 0;
let mcounter = 1;

let setMins = document.getElementById("min");
let setSecs = document.getElementById("secs");
setMins.innerHTML="00";
setSecs.innerHTML="00";
let Interval;

start.addEventListener("click", startclk);
stop.addEventListener("click",stpclk);
reset.addEventListener("click",rstclk);


function startclk() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);    
}

function stpclk(){
    clearInterval(Interval);
    setMins.style.color="rgb(245, 42, 42)";
    setSecs.style.color="rgb(245, 42, 42)";
    stp.style.color="rgb(245, 42, 42)";
    result.style.border="2px solid rgb(245, 42, 42)"
}

function rstclk(){
    clearInterval(Interval);
    setMins.innerHTML="00";
    setSecs.innerHTML="00";
    counter=0;
    mcounter=1;
    setMins.style.color="rgb(228, 228, 228)";
    setSecs.style.color="rgb(228, 228, 228)";
    stp.style.color="rgb(228, 228, 228)";
    result.style.border="2px solid rgb(228, 228, 228)"
}
function startTimer() {
    setSecs.innerHTML = counter;
    if (counter => 0 && counter <= 9) {
        setSecs.innerHTML = "0" + counter;
        setSecs.style.color="rgb(23, 78, 23)";
        setMins.style.color="rgb(23, 78, 23)";
        stp.style.color="rgb(23, 78, 23)";
        result.style.border="2px solid rgb(23, 78, 23)"
    }
    if (counter >= 10 && counter < 60) {
        setSecs.innerHTML = counter;
        setSecs.style.color="rgb(23, 78, 23)";
    }

    if (counter == 60) {
        counter = 0;

        if (mcounter >= 0 && mcounter <= 9) {
            setMins.innerHTML = "0" + mcounter;
        }
        if (mcounter >= 10 && mcounter < 60) {
            setMins.innerHTML = mcounter;
        }
        if (mcounter == 60) {
            mcounter=0;           
            setMins.innerHTML = 0;
            mcounter++;
        }
        
}

    counter++;


}
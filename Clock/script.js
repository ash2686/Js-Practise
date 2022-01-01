let clk = document.getElementById("clock");
let btn1 = document.getElementById("format1");
let btn2 = document.getElementById("format2");

let interval1 = setInterval(ampm,1000);
let interval =  setInterval(fireClock,1000);
// let interval1 = setInterval(ampm,1000);


function fireClock(){
    clearInterval(interval1);
    let dClock = new Date();
    let secs =  dClock.getSeconds();
    let mins = dClock.getMinutes();
    let hrs = dClock.getHours();

    if(hrs<10){
        hrs="0"+hrs;
    }
    else{
        hrs=hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    else{
        mins=mins;
    }

    if(secs<10){
        secs="0"+secs;
    }
    else{
        secs=secs;
    }

   clk.innerHTML = hrs+":"+mins+":"+secs;   
}

btn1.addEventListener("click",()=>{
    clearInterval(interval);
    interval1 = setInterval(ampm,1000);
});


btn2.addEventListener("click",()=>{
    clearInterval(interval1);
    interval=setInterval(fireClock,1000);
});


function ampm(){
    clearInterval(interval);
    let dClock = new Date();
    let secs =  dClock.getSeconds();
    let mins = dClock.getMinutes();
    let hrs = dClock.getHours();
    let hours=0;
    

    if(hours<12){
        clk.innerHTML = hours+":"+mins+":"+secs +" "+ "AM";
    }
    if(hrs=>12){
        hours=hrs-12;

        if(hours<10){
            hours="0"+hours;
        }
        else{
            hours=hours;
        }
    }

    if(mins<10){
        mins="0"+mins;
    }
    else{
        mins=mins;
    }

    if(secs<10){
        secs="0"+secs;
    }
    else{
        secs=secs;
    }

   clk.innerHTML = hours+":"+mins+":"+secs + " "+"PM";
}
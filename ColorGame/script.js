let colors = document.getElementsByClassName("colors");
let newColor = document.getElementsByClassName("new-color")[0];
let gameColor = document.getElementById("game-color");
let mainDisplay = document.getElementsByClassName("main-color-display")[0];
let topDisplay = document.getElementsByClassName("top-display")[0];
let r, g, b, temp, i, j, findColor, e;

start();

newColor.addEventListener("click", start)

function getColors(r, g, b) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    // console.log(r,g,b);
    return [r, g, b];
}

function start() {
    mainDisplay.style.backgroundColor = "#ffffff";
    topDisplay.style.backgroundColor = "#ffffff";
    for (i = 0; i < colors.length; i++) {
        colors[i].style.display = "block";
        colors[i].innerHTML = "";
        colors[i].style.border="1px solid black"
        let cls = getColors();
        temp = `rgb(${cls[0]},${cls[1]},${cls[2]})`;
        colors[i].style.backgroundColor = temp;
        // console.log(colors[i].style.backgroundColor);
    }
    findColor = Math.floor(Math.random() * 6);
    gameColor.innerHTML = colors[findColor].style.backgroundColor;
    // console.log(gameColor.innerHTML);
};

for (j = 0; j < colors.length; j++) {
    colors[j].addEventListener("click", (e) => {
        if (e.target.style.backgroundColor == gameColor.innerHTML) {
            mainDisplay.style.backgroundColor = e.target.style.backgroundColor;
            topDisplay.style.backgroundColor = e.target.style.backgroundColor;
            e.target.innerHTML = e.target.style.backgroundColor;
            e.target.style.display="flex";
            e.target.style.justifyItems="center";
            e.target.style.alignItems="center";

            for (let k = 0; k < colors.length; k++) {
                if (colors[k].style.backgroundColor != e.target.style.backgroundColor) {
                    colors[k].style.display = "none";
                    // colors[k].style.backgroundColor = e.target.style.backgroundColor;
                }
            }
        }
        else {
            e.target.style.backgroundColor = "transparent";
            e.target.style.border = "none";
        }
        // console.log(e.target.style.backgroundColor);
    });
}


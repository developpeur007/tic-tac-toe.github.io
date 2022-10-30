// <======== Start Game ========> //

let divs = document.querySelectorAll(".center div");

let trurn = document.querySelector(".top .turn img");

let arrayImages = Array();

let array = [];

divs.forEach((div) => {
    div.addEventListener("click", (e) => {
        if (window.localStorage.getItem("turn") == "o") {
            trurn.setAttribute("src", "images/x.png");
            Game(e);
            // win();
        } else {
            trurn.setAttribute("src", "images/Oactive.png");
            let img = document.createElement("img");
            img.setAttribute("src", "images/xGame.png");
            img.setAttribute("data-img", e.currentTarget.dataset.item);
            e.target.appendChild(img);
            e.target.style.pointerEvents = "none";
            window.localStorage.setItem("turn", "o");
            // win();
        }
        let imgs = document.querySelectorAll(".center img");
        // console.log(imgs);
        imgs.forEach((img) => {
            // console.log(img.getAttribute("data-img"));
            if (img.getAttribute("src") == "images/oGame.png") {
                arrayImages[img.getAttribute("data-img") - 1] = "o";
            } else if (img.getAttribute("src") == "images/xGame.png") {
                arrayImages[img.getAttribute("data-img") - 1] = "x";
            }
            win(arrayImages);
        });
    });
});

if (window.localStorage.getItem("turn") == "o") {
    trurn.setAttribute("src", "images/Oactive.png");
} else {
    trurn.setAttribute("src", "images/x.png");
}

function Game(e) {
    let img = document.createElement("img");
    img.setAttribute("src", "images/oGame.png");
    img.setAttribute("data-img", e.currentTarget.dataset.item);
    e.target.appendChild(img);
    e.target.style.pointerEvents = "none";
    window.localStorage.setItem("turn", "x");
}

// Quit BTN

let quitBtn = document.querySelector(".btns-restart .quit");

let containerWin = document.querySelector(".container-restart-game");

quitBtn.addEventListener("click", () => {
    if ((containerWin.className = "active")) {
        containerWin.style.display = "none";
        window.location.href = "index.html";
    } else {
        containerWin.classList.add("active");
    }
});

let playerWinImg = document.querySelector(".won img");
let playerWin = document.querySelector(".won h1");

let WinX;

let WinYou = document.querySelector(".bottom .you h2");

if (window.localStorage.getItem("WinX")) {
    // console.log("yes");
    WinX = Number(window.localStorage.getItem("WinX"));
    WinYou.innerHTML = window.localStorage.getItem("WinX");
} else {
    WinX = 0;
    WinYou.innerHTML = WinX;
}

let WinO;

let WinPl = document.querySelector(".bottom .cpu h2");

if (window.localStorage.getItem("WinO")) {
    // console.log("yes");
    WinO = Number(window.localStorage.getItem("WinO"));
    WinPl.innerHTML = window.localStorage.getItem("WinO");
} else {
    WinO = 0;
    WinPl.innerHTML = WinO;
}

let Ties;

let Ti = document.querySelector(".bottom .ties h2");

if (window.localStorage.getItem("Ties")) {
    console.log("yes");
    Ties = Number(window.localStorage.getItem("Ties"));
    Ti.innerHTML = window.localStorage.getItem("Ties");
} else {
    Ties = 0;
    Ti.innerHTML = Ties;
}

function win(ar) {
    if (
        (ar[0] == "x" && ar[1] == "x" && ar[2] == "x") ||
        (ar[0] == "x" && ar[3] == "x" && ar[6] == "x") ||
        (ar[0] == "x" && ar[4] == "x" && ar[8] == "x") ||
        (ar[2] == "x" && ar[4] == "x" && ar[6] == "x") ||
        (ar[1] == "x" && ar[4] == "x" && ar[7] == "x") ||
        (ar[3] == "x" && ar[4] == "x" && ar[5] == "x") ||
        (ar[6] == "x" && ar[7] == "x" && ar[8] == "x") ||
        (ar[2] == "x" && ar[5] == "x" && ar[8] == "x")
    ) {
        console.log("X Win :) !!!!");
        playerWinImg.style.display = "block";
        playerWinImg.src = "images/xGame.png";
        containerWin.classList.add("active");
        playerWin.innerHTML = "TAKES THE ROUND";
        WinX += 1;
        window.localStorage.setItem("WinX", WinX);
    } else if (
        (ar[0] == "o" && ar[1] == "o" && ar[2] == "o") ||
        (ar[0] == "o" && ar[3] == "o" && ar[6] == "o") ||
        (ar[0] == "o" && ar[4] == "o" && ar[8] == "o") ||
        (ar[2] == "o" && ar[4] == "o" && ar[6] == "o") ||
        (ar[1] == "o" && ar[4] == "o" && ar[7] == "o") ||
        (ar[3] == "o" && ar[4] == "o" && ar[5] == "o") ||
        (ar[6] == "o" && ar[7] == "o" && ar[8] == "o") ||
        (ar[2] == "o" && ar[5] == "o" && ar[8] == "o")
    ) {
        console.log("O Win :) !!!!");
        playerWinImg.style.display = "block";
        WinO += 1;
        window.localStorage.setItem("WinO", WinO);
        playerWin.innerHTML = "TAKES THE ROUND";
        containerWin.classList.add("active");
        playerWinImg.src = "images/Owin.png";
    } else if (
        ((ar[0] == "o" && ar[1] == "o" && ar[2] == "x") ||
            (ar[0] == "x" && ar[1] == "o" && ar[2] == "o") ||
            (ar[0] == "x" && ar[1] == "x" && ar[2] == "o") ||
            (ar[0] == "x" && ar[1] == "o" && ar[2] == "x") ||
            (ar[0] == "o" && ar[1] == "x" && ar[2] == "o") ||
            (ar[0] == "o" && ar[1] == "x" && ar[2] == "x")) &&
        ((ar[0] == "o" && ar[3] == "o" && ar[6] == "x") ||
            (ar[0] == "x" && ar[3] == "o" && ar[6] == "o") ||
            (ar[0] == "x" && ar[3] == "x" && ar[6] == "o") ||
            (ar[0] == "x" && ar[3] == "o" && ar[6] == "x") ||
            (ar[0] == "o" && ar[3] == "x" && ar[6] == "o") ||
            (ar[0] == "o" && ar[3] == "x" && ar[6] == "x")) &&
        ((ar[1] == "o" && ar[4] == "o" && ar[7] == "x") ||
            (ar[1] == "x" && ar[4] == "o" && ar[7] == "o") ||
            (ar[1] == "x" && ar[4] == "x" && ar[7] == "o") ||
            (ar[1] == "x" && ar[4] == "o" && ar[7] == "x") ||
            (ar[1] == "o" && ar[4] == "x" && ar[7] == "o") ||
            (ar[1] == "o" && ar[4] == "x" && ar[7] == "x")) &&
        ((ar[3] == "o" && ar[4] == "o" && ar[5] == "x") ||
            (ar[3] == "x" && ar[4] == "o" && ar[5] == "o") ||
            (ar[3] == "x" && ar[4] == "x" && ar[5] == "o") ||
            (ar[3] == "x" && ar[4] == "o" && ar[5] == "x") ||
            (ar[3] == "o" && ar[4] == "x" && ar[5] == "o") ||
            (ar[3] == "o" && ar[4] == "x" && ar[5] == "x")) &&
        ((ar[6] == "o" && ar[7] == "o" && ar[8] == "x") ||
            (ar[6] == "x" && ar[7] == "o" && ar[8] == "o") ||
            (ar[6] == "x" && ar[7] == "x" && ar[8] == "o") ||
            (ar[6] == "x" && ar[7] == "o" && ar[8] == "x") ||
            (ar[6] == "o" && ar[7] == "x" && ar[8] == "o") ||
            (ar[6] == "o" && ar[7] == "x" && ar[8] == "x")) &&
        ((ar[0] == "o" && ar[4] == "o" && ar[8] == "x") ||
            (ar[0] == "x" && ar[4] == "o" && ar[8] == "o") ||
            (ar[0] == "x" && ar[4] == "x" && ar[8] == "o") ||
            (ar[0] == "x" && ar[4] == "o" && ar[8] == "x") ||
            (ar[0] == "o" && ar[4] == "x" && ar[8] == "o") ||
            (ar[0] == "o" && ar[4] == "x" && ar[8] == "x")) &&
        ((ar[2] == "o" && ar[4] == "o" && ar[6] == "x") ||
            (ar[2] == "x" && ar[4] == "o" && ar[6] == "o") ||
            (ar[2] == "x" && ar[4] == "x" && ar[6] == "o") ||
            (ar[2] == "x" && ar[4] == "o" && ar[6] == "x") ||
            (ar[2] == "o" && ar[4] == "x" && ar[6] == "o") ||
            (ar[2] == "o" && ar[4] == "x" && ar[6] == "x"))
    ) {
        playerWinImg.style.display = "none";
        playerWin.innerHTML = "THEY ARE NO WINNER";
        containerWin.classList.add("active");
        window.localStorage.setItem("Ties", Ties + 1);
    }
}

//Btn Next Round

let btnNext = document.querySelector(".next");

btnNext.addEventListener("click", () => {
    window.location.href = "game.html";
});

let conatinerRes = document.querySelector(".container-res-game");

let btnRes = document.querySelector(".restart");

btnRes.addEventListener("click", () => {
    conatinerRes.classList.add("active");
});

let cancel = document.querySelector(".btns-res .no");
let restart = document.querySelector(".btns-res .yes");

cancel.addEventListener("click", () => {
    conatinerRes.classList.remove("active");
});

restart.addEventListener("click", () => {
    window.localStorage.clear();
    window.location.href = "index.html";
});
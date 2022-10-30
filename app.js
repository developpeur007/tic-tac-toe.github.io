let playerX = document.querySelector(".x");

let playerO = document.querySelector(".o");

window.localStorage.setItem("turn", "o")

playerX.addEventListener("click", (e) => {

    window.localStorage.setItem("turn", "x")

    playerX.style.backgroundColor = "#6F8691";

    // Change Image X

    let imageX = document.querySelector(".x img");

    imageX.setAttribute("src", "images/Xactive.png");

    // Change Image O

    let imageO = document.querySelector(".o img");

    imageO.setAttribute("src", "images/Oactive.png");

    playerO.style.backgroundColor = "transparent";
});

playerO.addEventListener("click", () => {
    // Change Image X

    window.localStorage.setItem("turn", "o")

    let image = document.querySelector(".x img");

    playerO.style.backgroundColor = "#6F8691";

    image.setAttribute("src", "images/x.png");

    // Change Image O

    let imageO = document.querySelector(".o img");

    imageO.setAttribute("src", "images/o.png");

    playerX.style.backgroundColor = "transparent";
});
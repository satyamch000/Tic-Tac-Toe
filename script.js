console.log("Welcome");
let turn = "X";
let turn1 = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7.5, 15, 90],
        [1, 4, 7, 2.5, 15, 90],
        [2, 5, 8, 12.5, 15, 90],
        [0, 4, 8, 2.5, 15, 45],
        [2, 4, 6, 2.5, 15, 135],
    ]

    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.gameinfo').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            gameover.play();
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "25vw";
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            turn1.play();
            checkwin();
            if (!isgameover)
                document.getElementsByClassName("gameinfo")[0].innerText = "Turn for " + turn;
        }
    })
})

Reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(Element => {
        Element.innerText = "";
        document.querySelector(".line").style.width = "0";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("gameinfo")[0].innerText = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
})
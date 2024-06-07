let turnx = document.querySelector(".soild");
let xxx = document.querySelector(".xxx");
let ooo = document.querySelector(".ooo");
let colorxo = document.querySelector(".box");
let text = document.querySelector(".text ");
let contner = document.querySelector(".contner ");
let border = document.querySelectorAll(".border span ");
let borders = document.querySelector(".border  ");
let border2 = document.querySelector(".border2");
let box = document.querySelector(".box  ");
let body = document.querySelector("body ");
let img = document.querySelectorAll(".boxbordr2 img");
let mode;
let turn;
let bb;
let sum = [];
// ---------------------
img.forEach(im => {
    im.addEventListener("click", ele => {
        bb = im.getAttribute("data-shipe");
        mode = bb;
        contner.style.display = " block";
        border2.style.display = " none";
        show()
    })
})

// ---------------------------

border.forEach(e => {
        e.onclick = elm => {
            if (e.innerHTML === "X") {
                console.log("x")
                turn = "x";
                border2.style.display = " block";
                borders.style.display = " none";
            } else {
                turnx.classList.add("open")
                console.log("O")
                turn = "o";
                border2.style.display = " block";

                borders.style.display = " none";
            }
        }
    })
    // --------------------------
function endgeme(number1, number2, number3) {
    turnx.classList.remove("soild")
    xxx.innerHTML = `   The winner is ${sum[number1]} `
    ooo.style.display = " none";
    document.getElementById("box" + number1).style.backgroundColor = "rgb(18, 2, 33)"
    document.getElementById("box" + number2).style.backgroundColor = "rgb(18, 2, 33)"
    document.getElementById("box" + number3).style.backgroundColor = "rgb(18, 2, 33)"
    setInterval(_ => {
        xxx.innerHTML += " . "
    }, 500)
    setTimeout(() => {
        location.reload();
    }, 2000);

}
// --------------------
function winer() {
    for (let i = 1; i < 10; i++) {
        sum[i] = document.getElementById("box" + i).innerHTML;
    }
    if (sum[1] == sum[2] && sum[2] == sum[3] && sum[1] != "") {
        endgeme(1, 2, 3);

    } else if (sum[4] == sum[5] && sum[5] == sum[6] && sum[5] != "") {
        endgeme(4, 5, 6);
    } else if (sum[7] == sum[8] && sum[8] == sum[9] && sum[7] != "") {
        endgeme(7, 8, 9);
    }
    // -------------------------------
    else if (sum[1] == sum[5] && sum[5] == sum[9] && sum[5] != "") {
        endgeme(1, 5, 9);
    } else if (sum[3] == sum[5] && sum[5] == sum[7] && sum[7] != "") {
        endgeme(3, 5, 7);
    }
    // ------------------------------------
    // -------------------------------
    else if (sum[1] == sum[4] && sum[4] == sum[7] && sum[1] != "") {
        endgeme(1, 4, 7);
    } else if (sum[2] == sum[5] && sum[5] == sum[8] && sum[2] != "") {
        endgeme(2, 5, 8);
    } else if (sum[3] == sum[6] && sum[6] == sum[9] && sum[6] != "") {
        endgeme(3, 6, 9);
    } else if (sum[1] != "" & sum[2] != "" & sum[3] != "" & sum[4] != "" & sum[5] != "" & sum[6] != "" & sum[7] != "" & sum[8] != "" & sum[9] != "") {
        turnx.classList.remove("soild")
        xxx.innerHTML = `The result is equal to `
        ooo.style.display = " none";
        setInterval(_ => {
            xxx.innerHTML += " . "
        }, 500)
        setTimeout(() => {
            location.reload();
        }, 2000);
    }

    // -----------------------------------
}
// =----------
function show() {
    console.log(mode)
    if (mode === "sh1") {
        modebule()
    } else if (mode === "sh2") {
        modered()
    } else if (mode === "sh3") {
        modeblak()
    } else if (mode === "sh4" || mode === "sh5") {
        modeonr()
    }
}

// -----------------------
function xo(id) {
    globl = "";
    let elem = document.getElementById(id);
    globl = elem;
    if (turn === 'x' && elem.innerHTML == '') {
        elem.innerHTML = `x`;
        turn = "o";
        turnx.classList.add("open")
        console.log(mode);
        // show()
        if (mode === "sh1") {
            elem.style.backgroundImage = 'url("img/BLUE X1.png")';

        } else if (mode === "sh2") {
            elem.style.backgroundImage = 'url("img/X2.png")';
        } else if (mode === "sh3") {
            elem.style.backgroundImage = 'url("img/blak x1.png")';
        } else if (mode === "sh4") {
            elem.style.backgroundImage = 'url("img/orn x1.png")';
        } else if (mode === "sh5") {
            elem.style.backgroundImage = 'url("img/abdullah .png")';
        } else if (mode === "sh5") {
            elem.style.backgroundImage = 'url("img/abdullah .png")';
        }
    } else if (turn === 'o' && elem.innerHTML == '') {
        elem.innerHTML = `o`;
        turn = "x";
        turnx.classList.remove("open")
        console.log(mode);


        if (mode === "sh1") {
            elem.style.backgroundImage = 'url("img/BLUE 0111.png")';
        } else if (mode === "sh2") {
            elem.style.backgroundImage = 'url("img/O2.png")';
        } else if (mode === "sh3") {
            elem.style.backgroundImage = 'url("/img/blak o1.png")';
        } else if (mode === "sh4") {
            elem.style.backgroundImage = 'url("img/orno1.png")';
        } else if (mode === "sh5") {
            elem.style.backgroundImage = 'url("img/al mous kh.png")';
        }

    }
    winer()
}

function wintext() {
    turnx.classList.remove("soild")
    xxx.innerHTML = `the win is ${sum[i]} `
    ooo.innerHTML = " "
}
border2.style.display = " none";

function modebule() {
    body.style.backgroundImage = 'url("img/BG\ BULE.jpg")';
}

function modered() {
    document.documentElement.style.setProperty("--main-colorone", "#8006b6")
    document.documentElement.style.setProperty("--main-colortwo", "#ac06b6")
    document.documentElement.style.setProperty("--main-colorthree", "#6f059d")
    body.style.backgroundImage = 'url("img/bg blak.jpg")';
}

function modeblak() {
    document.documentElement.style.setProperty("--main-colorone", "#111");
    document.documentElement.style.setProperty("--main-colortwo", "#222");
    document.documentElement.style.setProperty("--main-colorthree", "#898989");
    body.style.backgroundImage = 'url("img/bg blak11.jpg")';

}

function modeonr() {
    document.documentElement.style.setProperty("--main-colorone", "#dd320f");
    document.documentElement.style.setProperty("--main-colortwo", "#dd660f");
    document.documentElement.style.setProperty("--main-colorthree", "#f28f46");
    body.style.backgroundImage = 'url("img/bg orn.jpg")';
}

function saj() {
    document.documentElement.style.setProperty("--main-colorone", "#dd320f");
    document.documentElement.style.setProperty("--main-colortwo", "#dd660f");
    document.documentElement.style.setProperty("--main-colorthree", "#f28f46");
    body.style.backgroundImage = 'url("img/bg orn.jpg")';
}
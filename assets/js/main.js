

// console.log("LEVEL_1_2_!");

// let blacky = document.getElementsByClassName('example');


// const myFunction = () => {
//     for (let i = 0; i < blacky.length; i++) {
//         blacky[i].style.backgroundColor = "#000";
//         blacky[i].style.color = "#fff";
//     }
// }

// console.log("LEVEL_2_1_!");
// let navHome = document.getElementById('navHome');

// const change = () => {
//     navHome.style.backgroundColor = "pink";
//     navHome.style.color = "white";
//     navHome.innerHTML = "emoH";
// }

// console.log("LEVEL_2_2_!");
// let vorname = document.getElementById('vorname');
// let nachname = document.getElementById('nachname');
// let land = document.getElementById('land');

// const getValue = () => {
//     if (vorname || nachname || land) {
//         console.log(vorname.value);
//         console.log(nachname.value);
//         console.log(land.value);
//     }
// };

// console.log("LEVEL_2_3_!");
// // Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333

// let tagged = document.getElementsByTagName('li');
// console.log(tagged);
// let taggedClass = document.querySelector('.active');

// const changeColors = () => {
//     taggedClass.style.backgroundColor = "#396362";
//     tagged[2].style.backgroundColor = "#4b8e8d";
//     tagged[1].style.backgroundColor = "#ffe7d1";
//     tagged[0].style.backgroundColor = "#f6c89f";
// }


// console.log("LEVEL_2_4_!");
// let farbi = document.querySelector('#farbeAuswahlen');
// let button = document.getElementById('button');

// button.addEventListener('click', () => {
//     console.log("servus");
//     switch (Number(farbi.value)) {
//         case 1: document.body.style.backgroundColor = "mediumorchid";
//             break;
//         case 2: document.body.style.backgroundColor = "mintcream";
//             break;
//         case 3: document.body.style.backgroundColor = "dodgerblue";
//             break;
//         case 4: document.body.style.backgroundColor = "goldenrod";
//             break;
//         case 5: document.body.style.backgroundColor = "wheat";
//             break;
//         case 6: document.body.style.backgroundColor = "mediumturquoise";
//             break;
//         case 7: document.body.style.backgroundColor = "moccasin";
//             break;
//         case 8: document.body.style.backgroundColor = "firebrick";
//             break;
//         case 9: document.body.style.backgroundColor = "lime";
//             break;
//         case 10: document.body.style.backgroundColor = "slategray";
//             break;
//     }
// });

console.log("LEVEL_2_10_!");
let element = document.getElementById('element');

const small = () => {
    console.log("small");
    element.classList.remove('middle', 'big');
    element.classList.add('small');
}
const middle = () => {
    console.log("middle");
    element.classList.remove('big');
    element.classList.add('middle');
}
const big = () => {
    console.log("big");
    element.classList.remove('small', 'middle');
    element.classList.add('big');
}


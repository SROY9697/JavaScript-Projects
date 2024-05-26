let randomNum1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1);

let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum2);

let imagesrc1 = "images/dice" + randomNum1 + ".png";
let imagesrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imagesrc1);
document.querySelectorAll("img")[1].setAttribute("src", imagesrc2);

// console.log(value1, value2);

if (randomNum1 === randomNum2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}

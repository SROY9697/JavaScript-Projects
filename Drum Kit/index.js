var len = document.querySelectorAll(".drum").length;
// console.log(len);

for (i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
  });
}

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();

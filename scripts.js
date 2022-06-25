// Buttons & others
const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')

const topLeft = document.querySelector('.top-left')
const topCenter = document.querySelector('.top-center')
const topRight = document.querySelector('.top-right')
const bottomLeft = document.querySelector('.bottom-left')
const bottomCenter = document.querySelector('.bottom-center')
const bottomRight = document.querySelector('.bottom-right')

const spaces = [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]

/* Preset Functions */
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

let randomNumero = randomNum(6) - 1
let randomSpace = spaces[randomNumero]
startBtn.addEventListener('click', () => {

  setTimeout(() => {
    randomSpace.style.backgroundColor = "#f0ad4e";
    console.log("hola")
  }, 500)

  randomSpace.style.backgroundColor = "lightgrey"
  console.log("what")
})
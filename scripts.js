// Buttons & others
const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')

const topLeft = document.querySelector('.top-left')
const topCenter = document.querySelector('.top-center')
const topRight = document.querySelector('.top-right')
const bottomLeft = document.querySelector('.bottom-left')
const bottomCenter = document.querySelector('.bottom-center')
const bottomRight = document.querySelector('.bottom-right')

const allDivs = document.querySelectorAll('.container div')

const spaces = [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]

/* Preset Functions */
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

// Main variables
let difficultyLevel = 'easy';

let started = false;

let baseColor = 'lightgrey'

let randomSpace;
function pickNumber() {
  let randomNumero = randomNum(6) - 1
  randomSpace = spaces[randomNumero]
}

/*
possibly for first param, have the time
for easy: singularTile(750)
*/
function singularTile(timeSpent) {
  pickNumber()
  randomSpace.style.backgroundColor = "#f0ad4e"
  console.log(difficultyLevel)

  hitList.push(randomSpace)

  setTimeout(() => {
    randomSpace.style.backgroundColor = baseColor
    console.log(randomSpace.classList.value)
  }, timeSpent)

  console.log(hitList)
}

let hitList = []

startBtn.addEventListener('click', () => {
  started = true;
  hitList = [];
  tapList = [];
  if (difficultyLevel == 'easy') {
    singularTile(750)
  } else if (difficultyLevel == 'medium') {
    let time = 500
    singularTile(time)
    setTimeout(() => {
      singularTile(time)
    }, time)
  } else if (difficultyLevel == 'hard') {
    let time = 300
    singularTile(time)
    setTimeout(() => {
      singularTile(time)
    }, time)
    setTimeout(() => {
      singularTile(time)
    }, time*2+10)
    setTimeout(() => {
      singularTile(time)
    }, time*3+20)
    setTimeout(() => {
      singularTile(time)
    }, time*4+30)
  }
})

function changeColor(color) {
  document.querySelectorAll('.container div').forEach(el => {
    el.style.backgroundColor = color;
  })
}

let tapList = []

for (let i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', () => {
    console.log(spaces[i].classList.value)
    tapList.push(spaces[i])
    console.log(tapList)
    if (difficultyLevel == 'easy') {
      if (started == true && randomSpace.classList.value == spaces[i].classList.value) {
        changeColor('green')
        setTimeout(() => {
          changeColor(baseColor)
        }, 1000)
        started = false;
      } else if (started == true && randomSpace.classList.value != spaces[i].classList.value) {
        changeColor('red')
        setTimeout(() => {
          changeColor(baseColor)
        }, 1000)
        started = false;
      }
    } else if (difficultyLevel == 'medium' || difficultyLevel == 'hard') {
      let hitListShortend = hitList.slice(0,tapList.length)
      console.log("HITLISTSHORT", hitListShortend[hitListShortend.length-1])
      console.log("tabList", tapList[tapList.length-1])
      console.log(hitListShortend[hitListShortend.length-1] == tapList[tapList.length-1])
      if (started == true && hitListShortend[hitListShortend.length-1] != tapList[tapList.length-1]) {
        changeColor('red')
        setTimeout(() => {
          changeColor(baseColor)
        }, 1000)
        started = false;
      }
      if (started == true && hitList.length == tapList.length) {
        changeColor('green')
        setTimeout(() => {
          changeColor(baseColor)
        }, 1000)
        started = false;
      }
    }
  })
}

const difficulty = document.getElementById('difficulty')
const confirm = document.querySelector('.confirm')

confirm.addEventListener('click', () => {
  console.log(difficulty.value)
  hitList = []
  tapList = []

  if (difficulty.value == "easy") {
    baseColor = 'lightgrey';
    difficultyLevel = "easy";
    changeColor(baseColor)
  } else if (difficulty.value == "medium") {
    baseColor = 'grey'
    difficultyLevel = "medium";
    changeColor(baseColor)
  } else if (difficulty.value == "hard") {
    baseColor = 'darkslategrey';
    difficultyLevel = "hard";
    changeColor(baseColor)
  }
})
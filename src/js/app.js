// TODO: write code here

// // comment this to pass build
// const unusedVariable = "variable";

// // for demonstration purpose only
// export default function demo(value) {
//   return `Demo: ${value}`;
// }

let boardEl = document.createElement('div');
boardEl.classList.add('board');
let contEl = document.querySelector('.board-container');
contEl.appendChild(boardEl);
for (let index = 0; index < 16; index++) {
  let cellEl = document.createElement('div');
  cellEl.classList.add('A');
  boardEl.appendChild(cellEl);
}
export function createImg(number) {
  let imgEl = document.createElement('img');
  imgEl.classList.add('goblin');
  let cellCollection = document.querySelectorAll('.A');
  cellCollection[number].appendChild(imgEl);
}

export function removeImg() {
  let goblinEl = document.querySelector('.goblin');
  if (goblinEl) {
    goblinEl.remove();
  }
}

export default function changePlace() {
  removeImg();
  let number = Math.floor(Math.random()*16);
  createImg(number);
}

const IntervalId = setInterval(changePlace,1000);
setTimeout(() => {clearInterval(IntervalId)}, 20000);  
const container = document.querySelector(".container");
const promptBtn = document.querySelector(".prompt");

createGrid(16);

function changeColor(e) {
  // For random colors
  //   const randoR = Math.floor(Math.random() * 256);
  //   const randoG = Math.floor(Math.random() * 256);
  //   const randoB = Math.floor(Math.random() * 256);
  //   e.target.style.backgroundColor = `rgb(${randoR},${randoB},${randoG})`;
  e.target.style.backgroundColor = "black";
  e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.09;
}

function handlePrompt() {
  let gridnum = Number(prompt("Please enter grid size"));
  if (gridnum === undefined || gridnum === null || gridnum === "") {
    return;
  }
  while (gridnum > 100 || gridnum <= 0) {
    gridnum = Number(prompt("Number must be between 1 and 100"));
  }
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  createGrid(gridnum);
  changeColor();
}
function createGrid(gridsize) {
  container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
  for (let i = 0; i < gridsize * gridsize; i++) {
    let boxSquare = document.createElement("div");
    boxSquare.addEventListener("mouseover", changeColor);
    container.appendChild(boxSquare).className = "square";
  }
}

promptBtn.addEventListener("click", handlePrompt);

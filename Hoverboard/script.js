const container = document.getElementById("container")

const colors = ["#ffcb91", "#ffefa1","#94ebcd","#6ddccf","#f4f9f9","#ccf2f4","#a4ebf3","#aaaaaa","#d8e3e7","#51c4d3","#126e82"];

const SQUARE = 500;

for(let i = 0; i < SQUARE; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(square) {
  const color = getRandomColor();
  // console.log(color);
  square.style.background = color
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor(square) {
  square.style.background = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000";

}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
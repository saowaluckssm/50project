const img = document.querySelectorAll("#imgs img");
const imgs = document.querySelector("#imgs");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++

  changeImage();
}

function changeImage() {
  if(index > img.length - 1) {
    index = 0
  } else if (index < 0) {
    index = img.length - 1
  }

  imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}


btnRight.addEventListener("click", () => {
  index++

  changeImage();
  resetInterval();
})

btnLeft.addEventListener("click", () => {
  index--

  changeImage();
  resetInterval();
})


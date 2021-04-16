const loveMe = document.querySelector(".loveme");
const times = document.querySelector(".times");


let clickTime = 0;
let timesClicked = 0;


// doubleclick event
loveMe.addEventListener("click", (e) => {
  if(clickTime === 0) {
    clickTime = new Date().getTime();
    
  } else {
    if((new Date().getTime() - clickTime) < 800) {
      console.log("dClick");
      console.log(e);

      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
})

function createHeart(e) {
   const heart  = document.createElement("i");
   heart.classList.add("fas");
   heart.classList.add("fa-heart");

   const x = e.clientX;
   const y = e.clientY;

   const leftOffset = e.target.offsetLeft;
   const topOffset = e.target.offsetTop;

   const xInside = x - leftOffset;
   const yInside = y - topOffset;

   console.log(yInside, xInside);

   heart.style.top = `${yInside}px`;
   heart.style.left = `${xInside}px`;

   loveMe.appendChild(heart);
   times.innerHTML = ++timesClicked;

   setTimeout(() => {heart.remove()}, 1000)
   
}
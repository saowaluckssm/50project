const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");


openBtn.addEventListener("click", (e) => {
  console.log("clicked");
  navs.forEach((nav) => {
    nav.classList.add("visible");
  })
})

closeBtn.addEventListener("click", (e) => {
  navs.forEach((nav) => {
    nav.classList.remove("visible");
  })
})
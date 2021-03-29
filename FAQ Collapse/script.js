const btns = document.querySelectorAll(".faq-toggle");

const faq = document.querySelectorAll(".faq");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", () => {
//     console.log("click");
//     faq[i].classList.toggle("active");
//   });
// }

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  })
})





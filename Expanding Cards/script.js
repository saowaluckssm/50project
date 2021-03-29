const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    console.log("clicked");
    removeActiveClasses();
    panel.classList.add("active")
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active")
  })
}
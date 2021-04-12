const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");


const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four"

];

const type = [
  "info", "success", "error"
]


btn.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");

  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerHTML = message ? message : getRandomMassage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMassage() {
  return messages[Math.floor(Math.random() * messages.length)]

}
function getRandomType() {
  return type[Math.floor(Math.random() * type.length)]

}

console.log(Math.floor(Math.random() * messages.length));
const header  = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");


const animated_bgs = document.querySelectorAll(".animated-bg ");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text ");



setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="https://source.unsplash.com/user/erondu/1600x900" alt=""/>';
  title.innerHTML = "Lorem ipsum dolor sit elit.";
  excerpt.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, reiciendis.";
  profile_img.innerHTML = '<img src="https://cms.qz.com/wp-content/uploads/2018/10/Hatman_Artboard-2.jpg?quality=75&strip=all&w=900&h=900&crop=1" alt="">';
  name.innerHTML = "John Doe";
  date.innerHTML = "March 08, 2021";

  animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach(text => text.classList.remove("animated-bg-text"));

}
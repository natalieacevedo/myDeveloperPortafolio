const allSkillsContainer = document.querySelectorAll(".container-skill");

allSkillsContainer.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    let spanChild = el.querySelector(".textAbilityHide");
    console.log(spanChild);
    spanChild.classList.toggle("textShow");
    e.stopPropagation();
  });
});

allSkillsContainer.forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    let spanChild = el.querySelector(".textAbilityHide");
    console.log(spanChild);
    spanChild.classList.toggle("textShow");
    e.stopPropagation();
  });
});

const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//hamburguer menu:
const burguer = document.getElementById("burguer-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
const ionicon = document.querySelector(".hydrated");
console.log(burguer);

burguer.addEventListener("click", () => {
  console.log("enferma");
  ul.classList.toggle("show");
  burguer.classList.toggle(".hide-burguer");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

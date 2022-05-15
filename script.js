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

//carrousel funcionality
const container = document.querySelector(".projects-container");
const cards = document.querySelectorAll(".project-card");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

console.log(cards);

rightArrow.addEventListener("click", () => {
  container.scrollLeft += container.offsetWidth;
  const activeIndicator = document.querySelector(".indicators .active");
  if (activeIndicator.nextSibling) {
    activeIndicator.nextSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }
});

leftArrow.addEventListener("click", () => {
  container.scrollLeft -= container.offsetWidth;
  const activeIndicator = document.querySelector(".indicators .active");
  if (activeIndicator.previousSibling) {
    activeIndicator.previousSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }
});

//pagination carrousel;
const numberPages = Math.ceil(cards.length / 4);
let indicatorsContainer = document.querySelector(".indicators");

for (let i = 0; i < numberPages; i++) {
  const indicator = document.createElement("button");
  if (i === 0) {
    indicator.classList.add("active");
  }
  indicatorsContainer.appendChild(indicator);
  indicator.addEventListener("click", (e) => {
    container.scrollLeft = i * container.offsetWidth;
    document.querySelector(".indicators .active").classList.remove("active");
    e.target.classList.add("active");
  });
}

//hover cards///

cards.forEach((card) => {
  const sizeWindow = window.screen.width;
  if (sizeWindow > 1200) {
    card.addEventListener("mouseenter", (e) => {
      console.log(sizeWindow);
      const element = e.currentTarget;
      console.log(element);
      setTimeout(() => {
        cards.forEach((card) => card.classList.remove("hover"));
        element.classList.add("hover");
      }, 300);
    });
  }
});

container.addEventListener("mouseleave", () => {
  cards.forEach(card => card.classList.remove("hover"));
})
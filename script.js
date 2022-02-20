//listeners to show text when user hover over images:

const allSpanImages = document.querySelectorAll(".textAbilityHide");
const allSkillsImages = document.querySelectorAll(".icon-card");

console.log(allSkillsImages);
console.log(allSpanImages);

function showSkill(e) {
  e.preventDefault();

  console.log("pepa");
  allSpanImages.forEach((el) => {
    el.classList.toggle("textShow");
    e.stopPropagation();
    console.log("si sirve");
  });
}

allSkillsImages.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    console.log(e.target);
    showSkill(e);
  });
});

allSkillsImages.forEach((el) => {
  el.addEventListener("mouseleave", (e) => showSkill(e));
});

const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
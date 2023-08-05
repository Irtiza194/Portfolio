const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*========================================================================================================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 350,
  //reset: true,
});
sr.reveal(`.home-profile, .about-image, .contact-mail`, { origin: "right" });
sr.reveal(
  `.home-name, .home-info, .about-container, .section-title-1, .about-info, .contact-social, .contact-data`,
  { origin: "left" }
);
sr.reveal(`.services-card, .projects-card`, { interval: 100 });

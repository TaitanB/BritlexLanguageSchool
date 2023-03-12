const refs = {
  openMenuBtn: document.querySelector("[data-menu-open]"),
  closeMenuBtn: document.querySelector("[data-menu-close]"),
  menu: document.querySelector("[data-menu]"),
  body: document.querySelector("body"),
  wraper: document.querySelector(".nav__wraper"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.openMenuBtn.addEventListener("click", animationOpen);
refs.closeMenuBtn.addEventListener("click", animationClose);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  refs.menu.classList.toggle("is-hidden");
  refs.body.classList.toggle("no-scroll");
}

function animationOpen() {
  refs.wraper.classList.add("animationOpen");
  refs.menu.classList.remove("animationClose");
}

function animationClose() {
  refs.menu.classList.add("animationClose");
  refs.wraper.classList.remove("animationOpen");
}

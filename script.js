let drp = document.getElementById("dropdown");
let lnkAbout = document.getElementById("summary-link-about");
let lnkProject = document.getElementById("summary-link-project");
let lnkContact = document.getElementById("summary-link-contact");
let navBar = document.getElementById("nav-bar");
let navHeader = document.getElementById("nav-header-item");
let thmButtonNav = document.getElementById("nav-bar-item-theme");
let thmButtonHeader = document.getElementById("nav-header-item-theme");
let neutral = document.getElementsByClassName("neutral-theme");
let primal = document.getElementsByClassName("primary-theme");

let sunSource = "./images/icon-sun.webp";
let moonSource = "./images/icon-moon.webp";

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  changeThemeNav();
  changeThemeHeader();
}

lnkAbout.addEventListener("click", closeMenu);
lnkProject.addEventListener("click", closeMenu);
lnkContact.addEventListener("click", closeMenu);
thmButtonHeader.addEventListener("click", changeThemeHeader);
thmButtonNav.addEventListener("click", changeThemeNav);
document.addEventListener("scroll", hideButton);

function closeMenu() {
  if (drp.open) {
    drp.removeAttribute("open");
  }
}

function hideButton() {
  if (document.body.getBoundingClientRect().top !== 0) {
    navBar.style.visibility = "visible";
    navBar.className = "visible-button";
    if (Math.abs(document.body.getBoundingClientRect().top) > 500) {
      closeMenu();
    }
    navHeader.style.visibility = "collapse";
  } else {
    navHeader.style.visibility = "visible";
    navBar.style.visibility = "hidden";
    navBar.className = "hidden-button";
  }
}

function changeThemeHeader() {
  console.log("change theme");
  if (thmButtonHeader.className == "sunny") {
    thmButtonHeader.className = "moony";
    thmButtonHeader.src = moonSource;
    thmButtonNav.className = "moony";
    thmButtonNav.src = moonSource;
    navBar.style.backgroundColor = "var(--alfa-fifth-color)";
    for (let g = 0; g < neutral.length; g++) {
      const mainTheme = neutral[g];
      mainTheme.classList.add("dark-theme");
    }
    for (let h = 0; h < primal.length; h++) {
      const sideTheme = primal[h];
      sideTheme.classList.add("secondary-theme");
    }
  } else {
    thmButtonHeader.className = "sunny";
    thmButtonHeader.src = sunSource;
    thmButtonNav.className = "sunny";
    thmButtonNav.src = sunSource;
    navBar.style.backgroundColor = "var(--alfa-second-color)";
    for (let g = 0; g < neutral.length; g++) {
      const mainTheme = neutral[g];
      mainTheme.classList.remove("dark-theme");
    }
    for (let h = 0; h < primal.length; h++) {
      const sideTheme = primal[h];
      sideTheme.classList.remove("secondary-theme");
    }
  }
}

function changeThemeNav() {
  console.log("change theme");
  if (thmButtonNav.className == "sunny") {
    thmButtonNav.className = "moony";
    thmButtonNav.src = moonSource;
    thmButtonHeader.className = "moony";
    thmButtonHeader.src = moonSource;
    navBar.style.backgroundColor = "var(--alfa-fifth-color)";
    for (let g = 0; g < neutral.length; g++) {
      const mainTheme = neutral[g];
      mainTheme.classList.add("dark-theme");
    }
    for (let h = 0; h < primal.length; h++) {
      const sideTheme = primal[h];
      sideTheme.classList.add("secondary-theme");
    }
  } else {
    thmButtonNav.className = "sunny";
    thmButtonNav.src = sunSource;
    thmButtonHeader.className = "sunny";
    thmButtonHeader.src = sunSource;
    navBar.style.backgroundColor = "var(--alfa-second-color)";
    for (let g = 0; g < neutral.length; g++) {
      const mainTheme = neutral[g];
      mainTheme.classList.remove("dark-theme");
    }
    for (let h = 0; h < primal.length; h++) {
      const sideTheme = primal[h];
      sideTheme.classList.remove("secondary-theme");
    }
  }
}

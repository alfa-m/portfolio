let drp = document.getElementById("dropdown");
let lnkAbout = document.getElementById("summary-link-about");
let lnkProject = document.getElementById("summary-link-project");
let lnkContact = document.getElementById("summary-link-contact");
let navBar = document.getElementById("nav-bar");
let navHeader = document.getElementById("nav-header");
let thmButtonNav = document.getElementById("nav-bar-item-theme");
let thmButtonHeader = document.getElementById("nav-header-item-theme");
let neutral = document.getElementsByClassName("neutral-theme");

let sunSource = "./images/icon-sun.webp";
let moonSource = "./images/icon-moon.webp";

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  console.log("trevosa");
  changeTheme();
}

lnkAbout.addEventListener("click", closeMenu);
lnkProject.addEventListener("click", closeMenu);
lnkContact.addEventListener("click", closeMenu);
thmButtonHeader.addEventListener("click", changeTheme);
thmButtonNav.addEventListener("click", changeTheme);
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

function changeTheme() {
  let theme = "";
  if (thmButtonHeader.className == "sunny") {
    console.log("Sunny theme identified. Changing to dark theme");
    thmButtonHeader.className = "moony";
    thmButtonHeader.src = moonSource;
    thmButtonNav.className = "moony";
    thmButtonNav.src = moonSource;
    for (let g = 0; g < neutral.length; g++) {
      theme = neutral[g];
      theme.classList.add("dark-theme");
    }
  } else {
    console.log("Dark theme identified. Changing to sunny theme");
    thmButtonHeader.className = "sunny";
    thmButtonHeader.src = sunSource;
    thmButtonNav.className = "sunny";
    thmButtonNav.src = sunSource;
    for (let h = 0; h < neutral.length; h++) {
      theme = neutral[h];
      theme.classList.remove("dark-theme");
    }
  }
}

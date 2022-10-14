let drp = document.getElementById("dropdown");
let lnkAbout = document.getElementById("summary-link-about");
let lnkProject = document.getElementById("summary-link-project");
let lnkContact = document.getElementById("summary-link-contact");

lnkAbout.addEventListener("click", closeMenu);
lnkProject.addEventListener("click", closeMenu);
lnkContact.addEventListener("click", closeMenu);

function closeMenu() {
  if (drp.open) {
    console.log("teste click");
    drp.removeAttribute("open");
  }
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

if (isSafari()) {
  var indent1 = document.getElementById("indent1");
  indent1.innerHTML = "<br>";

  var indent2 = document.getElementById("indent2");
  indent2.innerHTML = "<br>";

  var indent3 = document.getElementById("indent3");
  indent3.innerHTML = "<br>";
}

function pageAbout() {
    window.location.href = "./about";
}

function pageServices() {
    window.location.href = "./services";
}

function pageJobs() {
    window.location.href = "./jobs";
}

function pageContact() {
    window.location.href = "./contact";
}

function pageIndex() {
    window.location.href = "https://www.blindcleanersco.com/";
}

function pageEmail() {
    window.location.href = "mailto:blindcleanersco.com";
}

function pageLocation() {
    window.open("https://www.google.com/maps/place/Seattle,+WA");
}

document.querySelectorAll('.current-year').forEach((yearElement) => {
    yearElement.textContent = new Date().getFullYear();
});

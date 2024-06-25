window.addEventListener("load", (e) => {
  AOS.init();
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  const scrollPage = () => {
    if (window.scrollY <= 1) {
      navbar.classList.remove("bg-black");
      navbar.classList.remove("border-b");
      navbar.classList.remove("border-zinc-900");
      navbar.classList.add("bg-transparent");
    } else {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-black");
      navbar.classList.add("border-b");
      navbar.classList.add("border-zinc-900");
    }
  };

  document.addEventListener("scroll", scrollPage);
});

if (document.contains(document.getElementById("see_pass"))) {
  document.getElementById("see_pass").addEventListener("change", (e) => {
    const inputPass = document.getElementById("pass");

    if (inputPass.type === "password") inputPass.type = "text";
    else inputPass.type = "password";
  });
}

const navbar = document.querySelector(".navbar");

function scrollToElement(targetElement) {
  const elementOffset = targetElement.offsetTop - navbar.offsetHeight - 50;
  window.scrollTo({
    top: elementOffset,
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      scrollToElement(targetElement);
    }
  });
});

const asideOff = document.querySelector(".aside_off");
const offCanvas = document.querySelector(".off_canvas");

// Show off-canvas
document.getElementById("showOffCanvas").addEventListener("click", () => {
  asideOff.classList.remove("hidden");
  offCanvas.classList.remove("HideOff");
  offCanvas.classList.add("showOff");
});

// Close off-canvas
document.getElementById("closeOffCanvas").addEventListener("click", closeOff);
const allLinks = document.querySelectorAll("#offCanvas_list a");

console.log(allLinks);

allLinks.forEach((element) => {
  element.addEventListener("click", closeOff);
});

function closeOff() {
  offCanvas.classList.remove("showOff");
  offCanvas.classList.add("HideOff");
  setTimeout(() => {
    asideOff.classList.add("hidden");
  }, 500);
}

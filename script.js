// Scroll reveal effect
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  const triggerPoint = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealElements);
revealElements();

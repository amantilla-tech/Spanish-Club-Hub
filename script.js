// Replace this with your free Google Form URL when your club creates it.
const SUBMISSION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLs9EnlEnaJ9uDv_VqPYuOCbtp5kNMbPMXuhzVPSbJmU6TsQ/viewform?usp=header";

function openForm(event) {
  event.preventDefault();
  if (SUBMISSION_FORM_URL.includes("PASTE-YOUR")) {
    showToast("Add your Google Form link in script.js first!");
    return false;
  }
  window.open(SUBMISSION_FORM_URL, "_blank");
  return false;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function answer(correct) {
  const result = document.getElementById("quiz-result");
  result.textContent = correct ? "¡Correcto! 🎉" : "Not quite — try again!";
  result.style.color = correct ? "#3f7d55" : "#b43c39";
}

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".topbar nav").classList.toggle("open");
});

document.querySelectorAll(".topbar nav a").forEach(link => {
  link.addEventListener("click", () => document.querySelector(".topbar nav").classList.remove("open"));
});


const toggleBtn = document.getElementById('toggle');
const body = document.body;


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}


toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
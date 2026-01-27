
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

localStorage.setItem("lastVisit", new Date().toISOString());
const TWo_DAYS_MS = 2 * 24 * 60 * 60 * 1000;
const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit) {
  const lastVisitDate = new Date(lastVisit);
  const now = new Date(); 
  if (now - lastVisitDate > TWo_DAYS_MS) 
    alert("Welcome back! It's been more than two days since your last visit.");
}

const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
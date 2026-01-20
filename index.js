function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('toggle').addEventListener('click', toggleDarkMode);


const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
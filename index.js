function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('toggle').addEventListener('click', toggleDarkMode);
// script.js

// target which element to add the script too
const toggleSwitch = document.querySelector('#checkbox');
// save the current style state in local browser storage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

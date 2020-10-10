// Selectors
const themeEl = document.getElementById('theme-dot-1')
const styleEl = document.getElementById('theme-mode-style');

// Get Data from localStorage by Token and add stylesheet accordingly - light or dark
const getDataFromLS = () => {
    const data = JSON.parse(localStorage.getItem('themeMode'))
    
    if (data !== null) {
        console.log(data.dark);

        if (data.dark) {
            styleEl.href = '/google-classroom/assets/css/theme-mode-1.css';
        } else{
            styleEl.href = '/google-classroom/assets/css/theme-mode-default.css'
        }
    }
}

// Update the localStorage accordingly
const updateLocalStorage = (target) => {
    const mode = {
        dark: target.classList.contains('dark')
    }
    localStorage.setItem( 'themeMode', JSON.stringify(mode) )
}

// Click Even handler for making functional while clicking and change the theme
themeEl.addEventListener('click', (e) => {

    e.target.classList.toggle('dark');

    updateLocalStorage(e.target);

    getDataFromLS();
});

// Load Content depending on the value of loCalStorage
document.addEventListener('DOMContentLoaded', getDataFromLS);
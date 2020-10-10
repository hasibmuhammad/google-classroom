// Selectors
const themeEl = document.getElementById('themeMode');
const styleEl = document.getElementById('theme-mode-style');
const moonEl = document.getElementById('moon');
const sunEl = document.getElementById('sun');

// Get Data from localStorage by Token and add stylesheet accordingly - light or dark
const getDataFromLS = () => {
    const data = JSON.parse(localStorage.getItem('themeMode'))
    
    if (data !== null) {
        if (data.dark) {
            moonEl.style.display = 'none';
            sunEl.style.display = 'flex';

            styleEl.href = '/google-classroom/assets/css/theme-mode-1.css';
        } else{
            sunEl.style.display = 'none';
            moonEl.style.display = 'flex';
            
            styleEl.href = '/google-classroom/assets/css/theme-mode-default.css'
        }
    } else {
        sunEl.style.display = 'none';
        moonEl.style.display = 'flex';
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
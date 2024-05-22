// Check if the user's theme preference is already set
const userThemePreference = localStorage.getItem('theme');

// If the preference is set, apply the theme
if (userThemePreference === 'dark') {
    document.body.classList.add('dark_mode');
}

function darkMode() {
    
    document.body.classList.toggle("dark_mode");
    
    // Save the user's theme preference to Local Storage
    const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    
    var button = document.getElementById("colour_button");
    if (button.innerHTML == "Dark Mode")
        button.innerHTML = "Light Mode";
    else
        button.innerHTML = "Dark Mode";
    
}
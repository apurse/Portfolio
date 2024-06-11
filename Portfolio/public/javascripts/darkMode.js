// Check if the user's theme preference is already set
const userThemePreference = localStorage.getItem('theme');

// If the preference is set, apply the theme
if (userThemePreference === 'dark') {
    document.body.classList.add('dark_mode');
}

function darkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle("dark_mode");

    // Save the user's theme preference to Local Storage
    const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    // Select the button and icons
    var button = document.getElementById("colour_button");
    var lightbulb = button.querySelector(".fa-lightbulb-o");
    var cross = button.querySelector(".fa-times");

    // Toggle visibility and color of icons based on theme
    if (currentTheme === 'dark') {
        cross.style.display = 'inline-block';
        lightbulb.style.color = 'yellow';
    } else {
        cross.style.display = 'none';
        lightbulb.style.color = '';
    }
}

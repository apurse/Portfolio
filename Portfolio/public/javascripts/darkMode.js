function darkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle("dark_mode");

    // Save the user's theme preference to Local Storage
    const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

}

document.addEventListener("DOMContentLoaded", function () {
    const bulbIcon = document.getElementById("bulb");
    const line = document.getElementById("bulbLine");

    bulbIcon.addEventListener("click", function () {
        darkMode();
    });

    function darkMode() {

        document.body.classList.toggle("dark_mode");

        // store theme change locally
        const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);


        // set line animation based on theme
        if (document.body.classList.contains("dark_mode")) {
            line.classList.remove("remove_line");
            line.classList.add("add_line");
        } else {
            line.classList.remove("add_line");
            line.classList.add("remove_line");
        }
    }

    // apply theme on load
    const userThemePreference = localStorage.getItem('theme');
    if (userThemePreference === 'dark') {
        document.body.classList.add('dark_mode');
        line.classList.add("add_line");
        line.classList.remove("remove_line");
    } else {
        document.body.classList.remove('dark_mode');
        line.classList.add("remove_line");
        line.classList.remove("add_line");
    }
});

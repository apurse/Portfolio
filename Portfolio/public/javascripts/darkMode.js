document.addEventListener("DOMContentLoaded", function () {
    const bulbIcon = document.getElementById("bulb");
    const burgerBulbIcon = document.getElementById("burgerBulb");
    const line = document.querySelector(".line");

    bulbIcon.addEventListener("click", function () {
        darkMode();
    });
    burgerBulbIcon.addEventListener("click", function () {
        darkMode();
    });

    function darkMode() {
        
        document.body.classList.toggle("dark_mode");
        const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);

        if (document.body.classList.contains("dark_mode")) {
            line.classList.add("add_line");
        } else {
            line.classList.add("remove_line");
        }

        line.addEventListener("animationend", onAnimationEnd, { once: true });
    }

    // Ensure the line remains visible
    function onAnimationEnd() {
        if (document.body.classList.contains("dark_mode")) {
            line.style.width = '3.25em';
        } else {
            line.style.width = '0';
        }

        line.classList.remove("add_line", "remove_line");
    }

    // Apply theme preference on page load
    const userThemePreference = localStorage.getItem('theme');
    if (userThemePreference === 'dark') {
        document.body.classList.add('dark_mode');
        line.style.width = '3.25em';
    } else {
        line.style.width = '0';
    }
});

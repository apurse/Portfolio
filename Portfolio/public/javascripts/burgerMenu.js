
// when burger button is clicked
function burgerToggle() {
    var burger_button = document.getElementById('burger_button');
    var burger_contents = document.getElementById('burger_contents');
    // burger_button.classList.toggle('burger_active');
    burger_contents.classList.toggle('burger_active');

    // if active, get height
    if (burger_contents.classList.contains('burger_active')) {
        burger_contents.style.maxHeight = burger_contents.scrollHeight + "px";
        burger_contents.style.display = 'block';

    } else {
        burger_contents.style.maxHeight = "0";
    }
}
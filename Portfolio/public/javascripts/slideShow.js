// when window loads, show first slide
window.onload = function () {
    showSlide(0);
};


// show slide in the carousel
function showSlide(pic_index) {

    // Disable active big slide and enable small slide
    var selected_small_slide = document.querySelector('.inactive_small_slide');
    var active_slide = document.querySelector('.active_big_slide');
    if (active_slide){
        active_slide.classList.remove('active_big_slide');
        selected_small_slide.classList.remove('inactive_small_slide');   
    }

    // Enable selected big slide
    var selected_big_slide = document.getElementById('big_slide' + pic_index);
    selected_big_slide.classList.add('active_big_slide');


    // Enable selected small slide
    var selected_small_slide = document.getElementById('small_slide' + pic_index);
    selected_small_slide.classList.add('inactive_small_slide');
}
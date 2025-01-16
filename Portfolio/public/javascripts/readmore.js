
// when window loads, show first slide
window.onload = function() {
    showSlide(0);
};


// show slide in the carousel
function showSlide(pic_index) {

    // Disable already active slide and dot
    var active_slide = document.querySelector('.active_popup_pic');
    var active_dot = document.querySelector('.active_dot');
    if (active_slide || active_dot) {
        active_slide.classList.remove('active_popup_pic');
        active_dot.classList.remove('active_dot');
    }

    // Enable selected slide
    var selected_slide = document.getElementById('slide' + pic_index);
    selected_slide.classList.add('active_popup_pic'); 

    
    // Enable selected dot
    var selected_dot = document.getElementById('slide_dot'+ pic_index)
    selected_dot.classList.add('active_dot');
}
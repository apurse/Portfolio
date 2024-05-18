
// Make the popup visible and get which button was clicked
function ReadMore(index) {

    
    // finding the correct popup
    var popup_box = document.getElementById('popup_box' + index);
    var page_content = document.getElementById('page_content');

    page_content.classList.add('blur');
    popup_box.classList.add('popup_box_active');


    // setup the starting slide
    showSlide(index, 0);
}


// disable the popup
function CloseMore(index) {
    var popup_box = document.getElementById('popup_box' + index);
    popup_box.classList.remove('popup_box_active');

    var page_content = document.getElementById('page_content');
    page_content.classList.remove('blur');
}


// show slide in the carousel
function showSlide(index, pic_index) {

    // Disable already active slide and dot
    var active_slide = document.querySelector('.active_popup_pic');
    var active_dot = document.querySelector('.active_dot');
    if (active_slide || active_dot) {
        active_slide.classList.remove('active_popup_pic');
        active_dot.classList.remove('active_dot');
    }

    // Enable selected slide
    var selected_slide = document.getElementById('slide' + index + pic_index);
    selected_slide.classList.add('active_popup_pic'); 

    
    // Enable selected dot
    var selected_dot = document.getElementById('slide_dot' + index + pic_index)
    selected_dot.classList.add('active_dot');
}
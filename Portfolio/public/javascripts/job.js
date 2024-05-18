
// show data for selected job
function select_event(index) {

    // disable the demo
    var event_info_demo = document.getElementById('event_info_demo');
    event_info_demo.classList.remove('event_active');


    // disable already active event_info and event_pic
    var active_event_info = document.querySelector('.event_active')
    var active_event_pic = document.querySelector('.event_active_pic');
    if (active_event_info || active_event_pic) {
        active_event_info.classList.remove('event_active');
        active_event_pic.classList.remove('event_active_pic');
    }


    // get selected event_info and event_pic
    var selected_event = document.getElementById('event_info' + index);
    var event_pic = document.getElementById('event' + index)
    selected_event.classList.add('event_active');
    event_pic.classList.add('event_active_pic')
}
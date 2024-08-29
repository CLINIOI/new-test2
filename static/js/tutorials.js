$(document).ready(function() {
    $('.tutorials-sidebar h3').click(function(){
        $(this).closest('.tutorials-sidebar').toggleClass('close');
    });

    $('.tutorial-nav > li > a').click(function(ev){
        if ($(this).children().attr("class") == 'active-sub-icon') {
            $(this).children().toggleClass('no-active-icon');
            $(this).children().removeClass('active-sub-icon');
        } else {
            $(this).children().toggleClass('active-sub-icon');
            $(this).children().removeClass('no-active-icon');
        }

        ev.preventDefault();
        $(this).next().toggleClass('topic-open');
    });
});
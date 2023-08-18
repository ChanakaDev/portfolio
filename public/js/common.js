$(document).ready(function() {

    if ( $(window).width() < 480) {   
        $(".img-bg-box").height($('.intro-img img').height());
        $(".project-div .lg-img").height($('.project-div .lg-img').width()/2);

        $('.item').each(function() {
            $('img', this).attr('src', "public/img/" + $('div', this).attr('data-url'));
        });
        $('.ui-design').each(function() {
            $(this).attr('src', "public/img/" + $(this).attr('data-url'));
        });
        $('.preview-img').each(function() {
            $(this).removeClass('preview-img');
        });
    }
   
    setTimeout(() => {
        $(".laoding-div").fadeOut();
    }, 1000);
});

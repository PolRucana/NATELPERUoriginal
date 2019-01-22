$(document).ready(function(){
    $('.menu').click(function(){
        $('nav').toggleClass('aparicion');
    });

    $('.chat-button').on('click', function(e){
        e.preventDefault();
        $('.chat-content').slideToggle('fast');
    });
});

/*$(document).on('ready',function(){
    $('.chat-button').on('click', function(e){
        e.preventDefault();
        $('.chat-content').slideToggle('fast');
    })
});*/
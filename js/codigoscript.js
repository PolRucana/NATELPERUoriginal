$(document).ready(function(){
    $('.menu').click(function(){
        $('nav').toggleClass('aparicion');
    });

    $('nav li').click(function(){
        $('nav').toggleClass('aparicion');
    });

    $('.chat-button').on('click', function(e){
        e.preventDefault();
        $('.chat-content').slideToggle('fast');
    });

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                        scrollTop: target.offset().top
                  }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
      });
});

/*$(document).on('ready',function(){
    $('.chat-button').on('click', function(e){
        e.preventDefault();
        $('.chat-content').slideToggle('fast');
    })
});*/
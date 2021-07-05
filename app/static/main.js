//javascript to be used throughout website

//redirects to homepage ie index.html
function toHome(){
    window.location.replace("/");
}

$('.carousel').carousel({
    interval: 10000
});

var down = false;
function menu(){

    if(window.matchMedia('screen and (orientation: portrait)').matches){
        $(".header-left").children().each(function(){
            if($(this).is("p")){

                if(!down){
                    $(this).css("margin-top", "0");

                }else{
                    $(this).css("margin-top", "-40%");
                }
            }
        })

        if(!down){
            $(".header-right").css("margin-top", "0");
            $(".header-middle").css("margin-top", "0");

            $(".menu i").removeClass("bi-caret-down-fill");
            $(".menu i").addClass("bi-caret-up-fill");
            down = true;
        }else{
            $(".header-right").css("margin-top", "-40%");
            $(".header-middle").css("margin-top", "-40%");
            
            $(".menu i").addClass("bi-caret-down-fill");
            $(".menu i").removeClass("bi-caret-up-fill");
            down = false;
        }
    }
}

function carouselShower(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        console.log('as');
        $("#carousel").hide();
    }else{
        console.log("bs");
    }
}

function imageSize(){
    var ch = $('#profilepic').height();
    $('#profilepic').css({'width':ch+'px'});
}

function find(name){
    menu();

    $([document.documentElement, document.body]).animate({
        scrollTop: $("." + name).offset().top - 50
    }, 1500);
}

function toTop(){
	jQuery('html, body').animate({scrollTop:0},1000);
}

$(document).scroll(function(){
    if($(window).scrollTop() >= $(window).height() && $("#totop").css('display') == 'none'){
        $("#totop").show("slow");
    }

    if($(window).scrollTop() < $(window).height() && $("#totop").css('display') != 'none'){
        $("#totop").hide("slow");
    }

    $(".py-game").children().each(function(){
        if($(this).offset().top <= $(window).scrollTop() + $(window).height() && !$(this).hasClass(".py-title") && !$(this).hasClass(".py-right-animation") && !$(this).hasClass(".py-right-animation")){
            $(this).children('.py-text-right').addClass('py-right-animation');
            $(this).children('.py-text-left').addClass('py-left-animation');
        }
    });
});

//INDEX.HTML
$('.carousel').carousel({
    interval: 10000
});

$(document).ready(function(){

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        $('.mobile-slider').show();
        $('.projects').hide();

        $('.mobile-slider').slick({
            centreMode: true,
            centrePadding: "50px",
            slidesToShow: 1,
            dots: false,
            arrows: false,
            adaptiveHeight: false,
            cssEase: "ease",
        });

        $('.slick-slide').eq(1).addClass("slide-animation-forwards");

        $('.mobile-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if($('.slick-slide').eq(nextSlide+1 % 3).hasClass("slide-animation-reverse")){
                $('.slick-slide').eq(nextSlide+1 % 3).removeClass("slide-animation-reverse");
            }
            
            if(!$('.slick-slide').eq(nextSlide+1 % 3).hasClass("slide-animation-forwards")){
                $('.slick-slide').eq(nextSlide+1 % 3).addClass("slide-animation-forwards");
            }

            if($('.slick-slide').eq(currentSlide+1 % 3).hasClass("slide-animation-forwards")){
                $('.slick-slide').eq(currentSlide+1 % 3).removeClass("slide-animation-forwards");
            }

            if(!$('.slick-slide').eq(currentSlide+1 % 3).hasClass("slide-animation-reverse")){
                $('.slick-slide').eq(currentSlide+1 % 3).addClass("slide-animation-reverse");
            }
        });
    }else{
        $('.mobile-slider').hide();
    }
});
          

//CITI.HTML
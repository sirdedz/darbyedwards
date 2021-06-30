//javascript to be used throughout website

//redirects to homepage ie index.html
function toHome(){
    window.location.replace("/");
}

function menu(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $(".header-left").children().each(function(){
            if($(this).is("p")){
                if($(this).css('display') == 'none'){
                    $(this).css("display", "grid");
                }else{
                    $(this).css("display", "none");
                }
            }
        })
        if($(".header-right").css('display') == 'none'){
            $(".header-right").css("display", "flex");
            $(".menu i").removeClass("bi-caret-down-fill");
            $(".menu i").addClass("bi-caret-up-fill");
        }else{
            $(".header-right").css("display", "none");
            $(".menu i").addClass("bi-caret-down-fill");
            $(".menu i").removeClass("bi-caret-up-fill");
        }
    }
}

//INDEX.HTML
$('.carousel').carousel({
    interval: 10000
});
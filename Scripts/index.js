/**
 * Created by lenovoY40-70 on 2017/3/1.
 */
$(document).ready( function() {
    $(".menu a:not(.active)"). hover( function(){
        $(this). css({
            "background-color": "#ee8917",
            "color": "#fff"
        })
    }, function(){
        $(this). css({
            "background-color": "#fff",
            "color": "#000"
        })
    })
    $(".pro-bot").hover( function(){
        $(this). addClass("active");
    }, function() {
        $(this). removeClass("active");
    })

    $(".about-bot li").hover( function(){
        $(".about-bot li"). removeClass("active");
        $(this). addClass("active");
        var n = $(this). index();
        $(".bd li"). removeClass("active").eq(n). addClass("active");
        //$(".bd li"). eq(n). addClass("active");
    })

})
$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
    $('.zgm7r a').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-.8+"rem"
        }, 800);
        return false;
        });
    $(".m2r span").each(function(index){
        $(this).click(function(){
            $(this).addClass('on').siblings('.m2r span').removeClass('on');
             $(".m2l a").hide().stop().eq(index).slideDown(500);
        })
    })
    $(".tabs span").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('span').removeClass('hover');
             $(".tab1").hide().stop().eq(index).fadeIn(200);
        })
    })
    $('.f_close').click(function () {
        $('.zg_frame,.mask').hide()
    })
})
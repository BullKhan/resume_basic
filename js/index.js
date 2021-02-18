$('.slide-group').slick({
    autoplay:true,
    dots:true,
    autoplaySpeed:5000,
    pauseOnFocus:false,
    arrows:true,
    prevArrow:'<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.gostop').click(function(){$(".slide-group").slick('slickPlay');});

$('#header .depth1 > li').on('click', function(){
    $(this).addClass('on')
    .siblings().removeClass('on')
})

var portNear = $('#portfolio').offset().top;
var skillNear = $('#skills').offset().top;
var contNear = $('#contact').offset().top;

$('.nav .depth1 > li').on('click', function(e){
    e.preventDefault();
    // $(this).addClass('on').siblings().removeClass('on');
    var num = $(this).index()
    switch(num) {
        case 0 : $('html').stop().animate({ scrollTop:0 },500); break;
        case 1 : $('html').stop().animate({ scrollTop:portNear },500); break;
        case 2 : $('html').stop().animate({ scrollTop:skillNear },500); break;
        case 3 : $('html').stop().animate({ scrollTop:contNear },500); break;
    }
})
$(window).on('scroll', function(){
    var sct = $(this).scrollTop();
    if( sct < portNear ) {
        $('.depth1 > li').eq(0).addClass('on').siblings().removeClass('on')
    } else if ( sct >= portNear && sct < skillNear ) {
        $('.depth1 > li').eq(1).addClass('on').siblings().removeClass('on')
    } else if ( sct >= skillNear && sct < contNear ) {
        $('.depth1 > li').eq(2).addClass('on').siblings().removeClass('on')
    } else {
        $('.depth1 > li').eq(3).addClass('on').siblings().removeClass('on')
    }
})

$('.section').on('mousewheel', function(e, delta){
    // delta > 0 : 위로 / delta < 0 : 아래로
    if ( delta > 0 ){
        var prev = $(this).prev().offset().top;
        // $('html').animate({}, 500, 속도, 콜백함수)
        $('html').stop().animate({
            scrollTop:prev
        }, 500, 'linear')
    } else if ( delta < 0 ) {
        var next = $(this).next().offset().top;
        $('html').stop().animate({
            scrollTop:next
        }, 500, 'linear')
        }
})
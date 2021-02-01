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
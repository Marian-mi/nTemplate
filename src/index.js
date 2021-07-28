
$('.slick-slider').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button class="slicks-prev slicks-arrow"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="slicks-next slicks-arrow"><i class="fas fa-arrow-right"></i></button >',
})

$('.courses-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    prevArrow: '<button class="courses-prev courses-arrow"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="courses-next courses-arrow"><i class="fas fa-arrow-right"></i></button >',
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 856,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

$('.testimonal-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ]
});



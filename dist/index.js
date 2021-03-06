
$('.slick-slider').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button class="slicks-prev slicks-arrow"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="slicks-next slicks-arrow"><i class="fas fa-arrow-right"></i></button >',
})

$('.courses-slider').slick({
    dots: true,
    infinite: false,
    speed: 600,
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
    speed: 600,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ]
});


document.addEventListener('DOMContentLoaded', () => {
    const navIcon = document.querySelector('.navbar-menu')
    const sideMenu = document.querySelector('.sideMenu')
    const closeIcon = document.querySelector('.closeSideMenu')
    const collapseButton = document.querySelector('.sideMenuCollapseButton')
    const collapseIcon = document.querySelector('.collapseIcon')

    navIcon.addEventListener('click', () => {
        sideMenu.classList.add('sideMenu-active')
    })

    closeIcon.addEventListener('click', () => {
        sideMenu.classList.remove('sideMenu-active')
    })

    collapseButton.addEventListener('click', () => {
        console.log('s')
        collapseIcon.classList.toggle('rotateCollapseIcon')
    })

    sideMenu.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            sideMenu.classList.remove('sideMenu-active')
        }
    })
})




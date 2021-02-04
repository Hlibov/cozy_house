jQuery(function () {
    initSlickCarousel();
});

// slick init
function initSlickCarousel() {
    jQuery('.animals-slider').slick({
        slidesToScroll: 1,
        rows: 0,
        slidesToShow: 3,
        prevArrow: '<button class="slick-prev"><span class="icon-long-left-arrow"></span></button>',
        nextArrow: '<button class="slick-next"><span class="icon-long-left-arrow"></span></button>',
        centerMode: true,
        centerPadding: '0px',
        draggable: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
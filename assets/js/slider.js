//marquree-slider
$(".marquree-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 1,
                infinite: false,
            },
        },
    ],
});

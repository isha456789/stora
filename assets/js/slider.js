// //marquree-slider
// $(".marquree-slider").slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 7000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: 'linear',
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     responsive: [
//         {
//             breakpoint: 991,
//             settings: {
//                 slidesToShow: 2,
//             },
//         },
//         {
//             breakpoint: 525,
//             settings: {
//                 slidesToShow: 1,
//                 infinite: false,
//             },
//         },
//     ],
// });
$(document).ready(function () {
  $(".top-strip-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".marquee-track").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
  });

  $(".history-slider").slick({
    autoplay: false,
    centerMode: false,
    infinite: false,
    arrows: false,

    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(".storma-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  infinite: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
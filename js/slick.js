$(function () {
  $(".w-t-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    cssEase: "linear",
    prevArrow: ".w-t-gallery-list-left",
    nextArrow: ".w-t-gallery-list-right",
  });
});

$(function () {
  $(".w-t-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-t-reviews-list-left",
    nextArrow: ".w-t-reviews-list-right",
  });
});
$(function () {
  $(".w-t-how-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-t-how-list-left",
    nextArrow: ".w-t-how-list-right",
  });
});

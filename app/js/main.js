$(function(){
    $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
      });

    $('.products__slider-inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true
    });

    var mixer = mixitup('.products__inner-box');  
  
});
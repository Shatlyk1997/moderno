$(function(){

    
    $(".rating__star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $(".product__slider-inner").slick({
    dots: true,
    arrows: false,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 4
    });

    $(".menu__btn").on('click', function(){
    $(".menu__list").slideToggle();
    });

    $(".header__btn-menu").on('click', function(){
    $(".header__box").toggleClass('active');
    });


    var mixer = mixitup('.products__inner-box');
    
});
$(function () {
    $('.slider__inner, .news__slider-inner').slick({
        prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
        infinite: false
    });
    $('input, select').styler();

    $('.header__btn-menu').on('click',function () {
        $('.menu ul').slideToggle();
    })
});
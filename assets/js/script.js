$(document).ready(function() {
    $('.img').slick({
        dots: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' ></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>"
    })
});

$(document).ready(function() {
    $(".img-to").slick();
});

$(document).ready(function() {
    $(".customer-review").slick({
        dots: true
    });
})
$(document).ready(function() {
    $(".img-somethingcoffee").slick({
        dots: true,

    });
})

$(document).ready(function() {
    $('.slick-img_newsmobile').slick({
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' ></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>"
    });

    $(".slick-img_news").slick({
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' ></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>"
    });
})
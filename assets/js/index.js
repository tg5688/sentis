$('.burger').click(function () {
    $('.navbar-main__list').slideToggle(1000);
    $('.burger>*').toggleClass('show');
})


$('.navbar-main__link').on('click', function () {
    var goToSection = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})


//slider
var count = 0;
var images = ['assets/img/Slider/cayo.jpg', 'assets/img/Slider/diego.jpg', 'assets/img/Slider/inez.jpg', 'assets/img/Slider/lope.jpg', 'assets/img/Slider/ramon.jpg', 'assets/img/Slider/sensa.jpg', 'assets/img/Slider/vidrio.jpg'];
// const doors=

const image = $('.banner');
image.css("background-image", "url(" + images[count++] + ")");

// var sliderItems = $('.slider-box__item');

// sliderItems.on('click', function () {
//     if (sliderItems.hasClass('active')) {
//         sliderItems.removeClass('active')
//     }
//     $(this).toggleClass('active');
//     console.log(this.dataset.option)
//     image.fadeOut(500).css("background-image", "url(" + images[this.dataset.option] + ")").fadeIn(500);
//     // image.fadeIn(500);
// })




setInterval(function () {
    image.fadeOut(500, function () {
        image.css("background-image", "url(" + images[count++] + ")");
        image.fadeIn(500);
    });
    if (count == images.length) {
        count = 0;
    }
}, 7000);
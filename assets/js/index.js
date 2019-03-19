$('.burger').click(function () {
    $('.navbar-main__list').slideToggle(1000);
    $('.burger>*').toggleClass('show');
})

$('.navbar-main__link').click(function () {
    var goToSection = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

//slider
var count = 0;
var time = 7000;
var imagesList = [{
    img: 'assets/img/Slider/cayo.jpg',
    text: 'cayo'
}, {
    img: 'assets/img/Slider/diego.jpg',
    text: 'diego'
}, {
    img: 'assets/img/Slider/inez.jpg',
    text: 'inez'
}, {
    img: 'assets/img/Slider/lope.jpg',
    text: 'lope'
}, {
    img: 'assets/img/Slider/ramon.jpg',
    text: 'ramon'
}, {
    img: 'assets/img/Slider/sensa.jpg',
    text: 'sensa'
}, {
    img: 'assets/img/Slider/vidrio.jpg',
    text: 'vidrio'
}];
var banner = $('.banner');
var doorName = $('#name');
var numberList = $('.slider-box__item');

banner.css("background-image", "url(" + imagesList[0].img + ")");
doorName.text(imagesList[0].text)

var changeNumber = function (that) {
    if (numberList.hasClass('active')) {
        numberList.removeClass('active')
    }
    $(that).addClass('active');
}

var timeChangeSlide = function () {
    count++;
    if (count == imagesList.length) count = 0;
    banner.fadeOut(500, function () {
        banner.css("background-image", "url(" + imagesList[count].img + ")");
        doorName.text(imagesList[count].text)
        banner.fadeIn(500);
        changeNumber(numberList[count]);
    })
}

var indexInterval = setInterval(timeChangeSlide, time)

var clickChangeSlide = function () {
    clearInterval(indexInterval);
    var index = numberList.index(this);
    var that = this;
    count = index;
    banner.fadeOut(500, function () {
        banner.css("background-image", "url(" + imagesList[index].img + ")");
        doorName.text(imagesList[index].text)
        banner.fadeIn(500);
        changeNumber(that);
    })
    indexInterval = setInterval(timeChangeSlide, time)
}
numberList.click(clickChangeSlide)
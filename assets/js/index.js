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
    text: 'cayo',
    // position: 'right center'
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

banner.css('background-image', 'url(' + imagesList[0].img + ')');
// banner.css('background-posiotion', imagesList[0].position);
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
        banner.css('background-image', 'url(' + imagesList[count].img + ')');
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
        banner.css('background-image', 'url(' + imagesList[index].img + ')');
        doorName.text(imagesList[index].text)
        banner.fadeIn(500);
        changeNumber(that);
    })
    indexInterval = setInterval(timeChangeSlide, time)
}
numberList.click(clickChangeSlide)

//section door
var showElement = function () {
    $('.door').css('display', 'none');
    if ($('.navbar-section__item').hasClass('active')) {
        $('.door').eq(0).css('display', 'block');
    }
}
showElement();

$('.navbar-section__item').click(function () {
    var index = $(this).data('model');

    $('.door').css('display', 'none');
    $('.navbar-section__item').removeClass('active');
    $(this).addClass('active');
    $('.door').eq(index).css('display', 'block');
});

//zmiana dekoru
$('.detail__img--type').click(function () {
    var index = $(this).data('type');
    $('.model--ramon').removeClass('active');
    $('.model--ramon').eq(index).addClass('active');
});

$('.detail__img--type').click(function () {
    var index = $(this).data('type');
    $('.model--sensa').removeClass('active');
    $('.model--sensa').eq(index).addClass('active');
});

//google maps
// The name of the spreadsheet from the browser location bar.
// Copy after 'key=' until before the next URL parameter beginning w/&
var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// The name of the sheet, displayed in a tab at the bottom of the spreadsheet.
// Default is 'Sheet1' if it's the first sheet.
var SHEET_NAME = 'YOUR_SHEET_NAME';

function doGet(request) {
    var callback = request.parameters.jsonp;
    var range = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME).getDataRange();
    var json = callback + '(' + Utilities.jsonStringify(range.getValues()) + ')';

    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

// Testing to see if the jsonp parameter is being used properly.
function testDoGet() {
    var request = {
        parameters: {
            jsonp: 'callback'
        }
    };
    var results = doGet(request);
    Logger.log(results.getContent());
}
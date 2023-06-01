$("body").on("click", ".callback-fix > span", function () {
  $('.callback-fix__drop').toggleClass('opened');
})

$(document).click(function (e) {
  var div = $(".callback-fix");
  var itemClick = $(".callback-fix__drop");
  if ((!div.is(e.target) && div.has(e.target).length === 0) && (!itemClick.is(e.target) && itemClick.has(e.target).length === 0)) {
    $(".callback-fix__drop").removeClass('opened');
  }
});

//  nav 

$("body").on("click", ".toggle__nav__item", function () {
  $('.main-nav').toggleClass('active');
  $('.overflow-background').toggleClass('active');
})

$("body").on("click", ".open_soc", function () {
  $('.main-nav').toggleClass('active');
})

$("body").on("click", ".mobile-close-nav", function () {
  $('.main-nav').removeClass('active');
})


$(function () {
  $('input[name="phone"]').mask("9(999) 999-9999");
});


// 

$('.index-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  infinite: true,
  responsive: [{
    breakpoint: 480,
    settings: {
      arrows: false,
    }
  }]
});


var $slider = $('.feedback-slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html('<span>0' + currentSlide + '</span>/0' + slidesCount)
  };

  $slider.on('init', function (event, slick) {
    $('.feedback-slider__control__noms').append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $(".feedback-slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.feedback-slider__control__prev'),
    nextArrow: $('.feedback-slider__control__next'),
  });
}

$('.js-video').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var popup = $('.awg-popup');
  var video = $(this).data('video');
  var iframe = '<iframe src="https://www.youtube.com/embed/' + video + '?rel=0&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  var videoBlock = $('.awg-popup').find('.awg-popup__video');
  videoBlock.html(iframe);
  popup.fadeIn();
});

$('.js-close-popup').click(function () {
  var popup = $('.awg-popup');
  var videoBlock = $('.awg-popup').find('.awg-popup__video');
  popup.fadeOut();
  videoBlock.empty();
});

$(document).ready(function () {
  $("#form-modal").submit(function () {
    $("#form-modal button").prop("disabled", true).text("Ждите...");
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function () {
      $('#form-modal').html("<div class='thx-text'><span>Спасибо.<br>Менеджер свяжется с вами в ближайшее время</span>");
    });
    return false;
  });

  // filter selected

  $("body").on("click", ".multiple-select-dropdown label input", function () {
    const span = $(this).parent().find('span').html();
    const selected = $(this).parents('.multiple-select-dropdown').prev().find('.multiple--selected');
    $(this).parents('.multiple-select-dropdown').prev().find('.multiple--title').hide();
    $(this).parents('.multiple-select-dropdown').prev().addClass('summary-selected');
    selected.html('<span>' + span + '</span><i></i>').addClass('active');
    $('.multiple-select').removeAttr("open");
  })

  $("body").on("click", ".multiple--selected i", function () {
    $(this).parents('.multiple--selected').prev('.multiple--title').show();
    $(this).parents('summary').removeClass('summary-selected');
    const radio = $(this).parents('summary').next('.multiple-select-dropdown');

    $(radio[0].children).each(function (i) {
      $(this.children[0].checked = false);
    });
    $(this).parent().removeClass('active').html('');
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest(".multiple-select").length) {
      $('details').removeAttr("open");
    }
    e.stopPropagation();
  });

});

// index partners

$(document).on('click', function (e) {
  if (!$(e.target).closest(".logos-parnters__item").length) {
    $('.logos-parnters__item').removeClass('active');
  }
  if ((!$(e.target).closest(".header__change-course .container").length) && (!$(e.target).closest(".nav__change-course").length)) {
    $('.header__change-course').removeClass('active');
  }
  e.stopPropagation();
});

//

$("body").on("click", ".index-event__filter a", function () {
  $(this).toggleClass('active');
})

//

$("body").on("click", ".subscribe-form input[type=checkbox]", function () {
  $(".subscribe-subtit").prop('disabled', !this.checked);
})

// 

$("body").on("click", ".nav__dropdown span", function () {
  $(this).toggleClass('active');
  $(this).next().toggleClass('active');
})


$("body").on("click", ".nav__change-course", function () {
  $('.header__change-course').toggleClass('active');
})

//

$("body").on("click", ".toggle__nav", function (event) {
  $('.toggle__nav').toggleClass('active');
  $('.header__m-toggle').toggleClass('active');
  $('body').toggleClass('no-scroll');
});

$(function () {
  $(".course--change-course__item").on("mouseover", function () {
    $('.course--change-course__item').removeClass('active');
    $(this).addClass("active");
  });
});


var $sliderResult = $('.result-slider');

if ($sliderResult.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html('<span>0' + currentSlide + '</span>/0' + slidesCount)
  };

  $sliderResult.on('init', function (event, slick) {
    $('.result-slider__control__noms').append(sliderCounter);
    updateSliderCounter(slick);
  });

  $sliderResult.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $(".result-slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: $('.result-slider__control__prev'),
    nextArrow: $('.result-slider__control__next'),
  });

}

//

var $sliderWorksCurators = $('.works-curators-slider');

if ($sliderWorksCurators.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounterWorks = document.createElement('div');
  sliderCounterWorks.classList.add('slider__counter');

  var updateSliderCounterWorks = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounterWorks).html('<span>0' + currentSlide + '</span>/0' + slidesCount)
  };

  $sliderWorksCurators.on('init', function (event, slick) {
    $('.works-curators-slider__control__noms').append(sliderCounterWorks);
    updateSliderCounterWorks(slick);
  });

  $sliderWorksCurators.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounterWorks(slick, currentSlide);
  });

  $(".works-curators-slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: $('.works-curators-slider__control__prev'),
    nextArrow: $('.works-curators-slider__control__next'),
  });
}



(function($) {
  $(function() {
    $('.tab').on('click', '.tablinks:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabcontent').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

//

$("body").on("click", ".toggle-data--title", function () {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
})

$( "#change-connect" ).on( "change", function() {
  let thisChange = $(this).find(':selected').attr('data-placeholder');
  $('#connect-input').attr('placeholder',thisChange);
} );

//

$("body").on("click", ".header__basket", function () {
  $('.basket__wrapper').addClass('active');
  $('.basket__container').addClass('active');
  $('.overflow-background').addClass('active') 
  $('body').addClass('no-scroll');
  $('.toggle__nav').removeClass('active');
  $('.header__m-toggle').removeClass('active');
})

function closeBasket() {
  $('.basket__wrapper').removeClass('active');
  $('.basket__container').removeClass('active');
  $('.overflow-background').removeClass('active') 
  $('body').removeClass('no-scroll');
}

$("body").on("click", ".basket__close, #continue-pay", function () {
  closeBasket()
})

$(document).on('click', function (e) {
  if ((!$(e.target).closest(".header__basket").length) && (!$(e.target).closest(".basket__container").length)) {
    closeBasket()
  }
  e.stopPropagation();
});

$("body").on("click", ".basket__page--payments--item", function () {
  $('.basket__page--payments--item').removeClass('active');
  $(this).addClass('active');
})

//

function openPrice(evt, tab) {
  var i, tabPrice, tablinks;

  tabPrice = document.getElementsByClassName("tabPrice");
  for (i = 0; i < tabPrice.length; i++) {
    tabPrice[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}
$(function () {
  $('input[name="phone"]').mask("9(999) 999-9999");
});

// 

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

  //

  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    details.addEventListener("click", () => {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute("open");
        }
      });
    });
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

$("body").on("click", ".nav__dropdown span", function () {
  $(this).toggleClass('active');
  $(this).next().toggleClass('active');
})


$("body").on("click", ".nav__change-course", function () {
  $('.header__change-course').toggleClass('active');

  const navElements = document.querySelectorAll(".nav__dropdown");

  navElements.forEach((nav) => {
    const childElements = nav.querySelectorAll(".nav__dropdown > *");

    childElements.forEach((child) => {
      child.classList.remove("active");
    });
  });
})

//

$("body").on("click", ".toggle__nav, .header__m-toggle--close", function (event) {
  $('.header__m-toggle').toggleClass('active');
  $('.overflow-background').toggleClass('active');
  $('body').toggleClass('no-scroll');
});


$(function () {
  $(".course--change-course__item").on("mouseover", function () {
    $('.course--change-course__item').removeClass('active');
    $(this).addClass("active");
  });
});


// выбор слайдера в зависимости от ширины экрана

var sliderResult = $('#result-slider');

var currentSlideResult;
var slidesCountResult;
var sliderCounterResult = document.createElement('div');
sliderCounterResult.classList.add('slider__counter');

var updateSliderCounterResult = function (slick, currentIndex) {
  currentSlideResult = slick.slickCurrentSlide() + 1;
  slidesCountResult = slick.slideCount;
  $(sliderCounterResult).html('<span>' + currentSlideResult + '</span>/' + slidesCountResult)
};

sliderResult.on('init', function (event, slick) {
  $('#result-slider-noms').append(sliderCounterResult);
  updateSliderCounterResult(slick);
});

sliderResult.on('afterChange', function (event, slick, currentSlideResult) {
  updateSliderCounterResult(slick, currentSlideResult);
});

sliderResult.slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  slidesToShow: 1,
  // centerMode: true,
  variableWidth: true,
  prevArrow: $('#result-slider-prev'),
  nextArrow: $('#result-slider-next'),
  responsive: [{
      breakpoint: 769,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});

//

// выбор слайдера в зависимости от ширины экрана

var sliderResult2 = $('#result-slider-2');

var currentSlideResult2;
var slidesCountResult2;
var sliderCounterResult2 = document.createElement('div');
sliderCounterResult2.classList.add('slider__counter');

var updateSliderCounterResult2 = function (slick, currentIndex) {
  currentSlideResult2 = slick.slickCurrentSlide() + 1;
  slidesCountResult2 = slick.slideCount;
  $(sliderCounterResult2).html('<span>' + currentSlideResult2 + '</span>/' + slidesCountResult2)
};

sliderResult2.on('init', function (event, slick) {
  $('#works-curators-noms').append(sliderCounterResult2);
  updateSliderCounterResult2(slick);
});

sliderResult2.on('afterChange', function (event, slick, currentSlideResult2) {
  updateSliderCounterResult2(slick, currentSlideResult2);
});

sliderResult2.slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  variableWidth: true,
  prevArrow: $('#works-curators-prev'),
  nextArrow: $('#works-curators-next'),
  responsive: [{
    breakpoint: 769,
    settings: {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 480,
    settings: {
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  }
]
});


// feedbacks slider

var $sliderFeedbackSlider = $('.feedbacks-slider');

if ($sliderFeedbackSlider.length) {
  var currentSlideFeedback;
  var slidesCountFeedback;
  var sliderCounterFeedback = document.createElement('div');
  sliderCounterFeedback.classList.add('slider__counter');

  var updateSliderCounterFeedback = function (slick, currentIndex) {
    currentSlideFeedback = slick.slickCurrentSlide() + 1;
    slidesCountFeedback = slick.slideCount;
    $(sliderCounterFeedback).html('<span>' + currentSlideFeedback + '</span>/' + slidesCountFeedback)
  };

  $sliderFeedbackSlider.on('init', function (event, slick) {
    $('#feedback-noms').append(sliderCounterFeedback);
    updateSliderCounterFeedback(slick);
  });

  $sliderFeedbackSlider.on('afterChange', function (event, slick, currentSlideFeedback) {
    updateSliderCounterFeedback(slick, currentSlideFeedback);
  });

  $sliderFeedbackSlider.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#feedback-prev'),
    nextArrow: $('#feedback-next'),
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });
}

// podcasts slider

var $sliderPodcasts = $('.podcasts-slider');

if ($sliderPodcasts.length) {
  var currentSlidePodcasts;
  var slidesCountPodcasts;
  var sliderCounterPodcasts = document.createElement('div');
  sliderCounterPodcasts.classList.add('slider__counter');

  var updateSliderCounterPodcasts = function (slick, currentIndex) {
    currentSlidePodcasts = slick.slickCurrentSlide() + 1;
    slidesCountPodcasts = slick.slideCount;
    $(sliderCounterPodcasts).html('<span>' + currentSlidePodcasts + '</span>/' + slidesCountPodcasts)
  };

  $sliderPodcasts.on('init', function (event, slick) {
    $('#podcasts-noms').append(sliderCounterPodcasts);
    updateSliderCounterPodcasts(slick);
  });

  $sliderPodcasts.on('afterChange', function (event, slick, currentSlidePodcasts) {
    updateSliderCounterPodcasts(slick, currentSlidePodcasts);
  });

  $sliderPodcasts.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#podcasts-prev'),
    nextArrow: $('#podcasts-next'),
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });
}

// authors slider

var $sliderWorksCurators = $('.authors-slider');

if ($sliderWorksCurators.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounterWorks = document.createElement('div');
  sliderCounterWorks.classList.add('slider__counter');

  var updateSliderCounterWorks = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounterWorks).html('<span>' + currentSlide + '</span>/' + slidesCount)
  };

  $sliderWorksCurators.on('init', function (event, slick) {
    $('#authors-noms').append(sliderCounterWorks);
    updateSliderCounterWorks(slick);
  });

  $sliderWorksCurators.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounterWorks(slick, currentSlide);
  });

  $(".authors-slider").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#authors-prev'),
    nextArrow: $('#authors-next'),
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
}

// how-earn slider

var $sliderHowEarn = $('.how-earn-slider');

if ($sliderHowEarn.length) {
  var currentSlideHowEarn;
  var slidesCountHowEarn;
  var sliderCounterHowEarn = document.createElement('div');
  sliderCounterHowEarn.classList.add('slider__counter');

  var updateSliderCounterWorks = function (slick, currentIndex) {
    currentSlideHowEarn = slick.slickCurrentSlide() + 1;
    slidesCountHowEarn = slick.slideCount;
    $(sliderCounterHowEarn).html('<span>' + currentSlideHowEarn + '</span>/' + slidesCountHowEarn)
  };

  $sliderHowEarn.on('init', function (event, slick) {
    $('#how-earn-noms').append(sliderCounterHowEarn);
    updateSliderCounterWorks(slick);
  });

  $sliderHowEarn.on('afterChange', function (event, slick, currentSlideHowEarn) {
    updateSliderCounterWorks(slick, currentSlideHowEarn);
  });

  $sliderHowEarn.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#how-earn-prev'),
    nextArrow: $('#how-earn-next'),
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
}

// curator course slider

var $sliderWorksCuratorsCourse = $('.curator-course--slider');

if ($sliderWorksCuratorsCourse.length) {
  var currentSlideCuratorsCourse;
  var slidesCountCuratorsCourse;
  var sliderCounterCuratorsCourse = document.createElement('div');
  sliderCounterCuratorsCourse.classList.add('slider__counter');

  var updateSliderCounterCuratorsCourse = function (slick, currentIndex) {
    currentSlideCuratorsCourse = slick.slickCurrentSlide() + 1;
    slidesCountCuratorsCourse = slick.slideCount;
    $(sliderCounterCuratorsCourse).html('<span>' + currentSlideCuratorsCourse + '</span>/' + slidesCountCuratorsCourse)
  };

  $sliderWorksCuratorsCourse.on('init', function (event, slick) {
    $('#curator-course-noms').append(sliderCounterCuratorsCourse);
    updateSliderCounterCuratorsCourse(slick);
  });

  $sliderWorksCuratorsCourse.on('afterChange', function (event, slick, currentSlideCuratorsCourse) {
    updateSliderCounterCuratorsCourse(slick, currentSlideCuratorsCourse);
  });

  $sliderWorksCuratorsCourse.slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#curator-course-prev'),
    nextArrow: $('#curator-course-next'),
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
}

// article slider

var $sliderArticles = $('.article-slider');

if ($sliderArticles.length) {
  var currentSlideArticles;
  var slidesCountArticles;
  var sliderCounterArticles = document.createElement('div');
  sliderCounterArticles.classList.add('slider__counter');

  var updateSliderCounterArticles = function (slick, currentIndex) {
    currentSlideArticles = slick.slickCurrentSlide() + 1;
    slidesCountArticles = slick.slideCount;
    $(sliderCounterArticles).html('<span>' + currentSlideArticles + '</span>/' + slidesCountArticles)
  };

  $sliderArticles.on('init', function (event, slick) {
    $('#article-noms').append(sliderCounterArticles);
    updateSliderCounterArticles(slick);
  });

  $sliderArticles.on('afterChange', function (event, slick, currentSlideArticles) {
    updateSliderCounterArticles(slick, currentSlideArticles);
  });

  $sliderArticles.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#article-prev'),
    nextArrow: $('#article-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });
}

// shors video slider

var $sliderShorts = $('.shorts-slider');

if ($sliderShorts.length) {
  var currentSlideShorts;
  var slidesCountShorts;
  var sliderCounterShorts = document.createElement('div');
  sliderCounterShorts.classList.add('slider__counter');

  var updateSliderCounterShorts = function (slick, currentIndex) {
    currentSlideShorts = slick.slickCurrentSlide() + 1;
    slidesCountShorts = slick.slideCount;
    $(sliderCounterShorts).html('<span>' + currentSlideShorts + '</span>/' + slidesCountShorts)
  };

  $sliderShorts.on('init', function (event, slick) {
    $('#shorts-noms').append(sliderCounterShorts);
    updateSliderCounterShorts(slick);
  });

  $sliderShorts.on('afterChange', function (event, slick, currentSlideShorts) {
    updateSliderCounterShorts(slick, currentSlideShorts);
  });

  $sliderShorts.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#shorts-prev'),
    nextArrow: $('#shorts-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });
}


(function ($) {
  $(function () {
    $('.tab').on('click', '.tablinks:not(.active)', function () {
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

$("#change-connect").on("change", function () {
  let thisChange = $(this).find(':selected').attr('data-placeholder');
  $('#connect-input').attr('placeholder', thisChange);
});

//

$("body").on("click", ".basket", function () {
  $('.basket__wrapper').addClass('active');
  if (window.innerWidth < 1024) {
    $('.header__m-toggle').removeClass('active');
    $('.overflow-background').addClass('active');
  }
})

function closeBasket() {
  $('.basket__wrapper').removeClass('active');
  $('body').removeClass('no-scroll');
  $('.overflow-background').removeClass('active');
}

$("body").on("click", ".basket__close, #continue-pay", function () {
  closeBasket()
})


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

// close top banner


const closeBanner = document.querySelector(".top-banner-close");

if (closeBanner) {
  closeBanner.addEventListener("click", () => {
    const banner = document.querySelector(".top-banner");
    banner.classList.remove("active");
  });
}



// sliders tablet

function checkWindowWidth() {
  if (window.innerWidth < 1025) {

    $(".logos-parnters__list").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    $(".index-works__list").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".index-feedbacks__list").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".index-events__list").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".what-learning").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".similar-products-slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  }

  if (window.innerWidth < 480) {
    $(".about-free--list").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    });
    $(".step-works-slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    });
  }
}

// Проверяем ширину окна при загрузке страницы
checkWindowWidth();

// Добавляем слушатель события resize для проверки при изменении ширины окна
window.addEventListener('resize', checkWindowWidth);


// плавный скролл до якоря

$('.anckorLink').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top - 30
  }, {
      duration: 370,    
      easing: "linear" 
  });

  return false;
});


// переключание рассрочки в order.html

const creditPrice = document.getElementById("price-credit");
const creditTab = document.querySelectorAll('.basket__page--credit-tab');

creditTab.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    for (const btn of creditTab) {
      btn.classList.remove("active");
    }
    link.classList.add("active");
    const button = event.target;
    const offlineValue = button.getAttribute("data-price");
    creditPrice.textContent = `${offlineValue}`;
  })
})

// выбор языков

const toggleLanguages = document.querySelectorAll(".toggleLanguage");

toggleLanguages.forEach(function (toggleLanguage) {
    const toggleLanguageDrop = toggleLanguage.querySelector(".toggleLanguage__drop");
    toggleLanguage.addEventListener("click", function () {
        toggleLanguageDrop.classList.toggle("open");
    });

    toggleLanguageDrop.addEventListener("click", function (e) {
      e.stopPropagation();
        if (e.target.tagName === "SPAN") {
            const selectedLanguage = e.target.textContent;

            const parentContainer = e.currentTarget;
            const siblings = parentContainer.querySelectorAll(".toggleLanguage__drop > span");

            siblings.forEach(function (sibling) {
                sibling.classList.remove("active");
            });
            const clickedClass = e.target.classList.value;
            e.target.classList.add("active");
            console.log(`Выбран язык: ${selectedLanguage}`);
            toggleLanguage.querySelector("span").textContent = selectedLanguage;
            while (toggleLanguage.querySelector("span").classList.length > 0) {
              toggleLanguage.querySelector("span").classList.remove(toggleLanguage.querySelector("span").classList.item(0));
            }
            if (clickedClass)
              toggleLanguage.querySelector("span").classList.add(clickedClass)
            toggleLanguageDrop.classList.remove("open");
        }
    });

    document.addEventListener("click", function (e) {
      if (!toggleLanguage.contains(e.target)) {
          toggleLanguageDrop.classList.remove("open");
      }
  });
});

 // выбор форматов обучения

 function updatePrice(event, button) {
  event.stopPropagation();
  var groupPrice = button.getAttribute('data-gpoup');
  var individualPrice = button.getAttribute('data-ind');
  var offlinePrice = button.getAttribute('data-off');
  var buttons = document.querySelectorAll('.format-learning-controls a');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
  });

  button.classList.add('active');

  document.getElementById('groupValue').textContent = groupPrice;
  document.getElementById('individualValue').textContent = individualPrice;
  document.getElementById('offlineValue').textContent = offlinePrice;
}

// header

$(function(){
  $(window).on('load', function() { // Добавляем обработчик после загрузки страницы
    var topPos = $('.header').first().offset().top;
    console.log(topPos);
    $(window).scroll(function() { 
      var top = $(document).scrollTop();
      if (top > topPos) {
        $('.header').addClass('fixed'); 
      } else {
        $('.header').removeClass('fixed');
      }
    });
  });
});


let prevScrollPos = window.pageYOffset;

if (window.innerWidth > 1024) {
  window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (document.querySelector(".header.fixed")) {
        if (prevScrollPos > currentScrollPos) {
            document.querySelector(".header.fixed").style.transform = "translateY(0)";
        } else {
            const headerHeight = document.querySelector(".header.fixed").offsetHeight - 54;
            document.querySelector(".header.fixed").style.transform = `translateY(-${headerHeight}px)`;
        }
      }
      prevScrollPos = currentScrollPos;
  }
}
document.addEventListener('DOMContentLoaded', function () {

var swiper = new Swiper(".slide_swiper", {
    speed: 600, // скорость переключения слайдов, чем больше - тем медленнее переключаются слайды
    parallax: true, // эффект параллакса (отдельные части движутся с различной скоростью, настраивается через data-swiper-parallax )
    effect: "fade", // эффект затемнения старых слайдов, вместе с параллаксом слайды наезжали друг на друга, поэтому старый слайд получает opacity: 0
    pagination: { // отображает bullet-кнопки внизу
        el: ".swiper-pagination", // стиль кнопок
        clickable: true, // возможность клика
    },
    keyboard: {
        enabled: true, // возможность управления клавиатурой
    },
    navigation: { // навигационные стрелки
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // позволяет прокручивать бесконечно слайды, после последнего начинается первый
});

swiper.addEventListener("keydown", function(e) {  //переключение слайдов стрелками на клавиатуре
    if (e.key == 38) {
      swiper.slidePrev();
    }
    if (e.key == 40) {
      swiper.slideNext();
    }
});

});
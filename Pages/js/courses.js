document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        freeMode: true,
        loop: true,
        slidesPerView: 2.5,
        keyboard: true,
        speed: 1500, 
        loopAdditionalSlides: 1, 
        loopPreventsSlide: false, 
        autoplay: {
            delay: 10000, 
            disableOnInteraction: false,
        },
        disableOnClick: false,
        breakpoints: {
            0: {
                slidesPerView: 1.7,
                
            },

            700: {
                slidesPerView: 2.5,
                
            },
        },
    });
});

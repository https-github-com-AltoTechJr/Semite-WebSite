document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        freeMode: true,
        loop: true,
        slidesPerView: 2.5,
        keyboard: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 2000, 
        loopAdditionalSlides: 1, 
        loopPreventsSlide: false, 
        autoplay: {
            delay: 10000, 
            disableOnInteraction: false,
        },
        disableOnClick: false,
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 835 && window.innerWidth > 490) {
            swiper.params.slidesPerView = 1.5,
            swiper.params.effect = 'coverflow',
            swiper.params.coverflowEffect = {
                rotate: 50,
                stretch: 100,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            };
        } else if (window.innerWidth <= 490) {
            swiper.params.slidesPerView = 1.5
        } else {
            swiper.params.slidesPerView = 2.5;
        }
        swiper.update(); // Atualiza o carrossel após a mudança de configuração
    });
});

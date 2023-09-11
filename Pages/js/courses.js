
const swiper = new Swiper('.swiper', {
    freeMode:true,
    loop: true,
    loopPreventsSlide: false,
    keyboard:true,
    mousewheel: true,
    slidesPerView: 2.5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  
  window.addEventListener('resize', function() {
    // Verifique o tamanho da tela usando uma media query
    if (window.innerWidth <= 650 && window.innerWidth > 490) { 

        swiper.params.effect = 'coverflow', // Aplica o efeito "coverflow"
        swiper.params.coverflowEffect = {
        rotate: 50, // ângulo de rotação
        stretch: 100, // esticamento das imagens
        depth: 100, // profundidade do efeito
        modifier: 0, // multiplicador do efeito
        slideShadows: false,
        
        
    };
      
    } else if (window.innerWidth <= 490) {
        swiper.params.slidesPerView = 1
        }
    else {
        swiper.params.slidesPerView = 2.5; // Volte ao valor padrão
    }

    swiper.update(); // Atualize o Swiper para refletir as alterações
});
window.addEventListener('resize', function() {
if (window.innerWidth <= 900 && window.innerWidth > 490) {
    slidesPerView = 1.5,
    swiper.params.effect = 'coverflow';
    swiper.params.coverflowEffect = {
        rotate: 50,
        stretch: 100,
        depth: 100,
        modifier: 0,
        slideShadows: true,
    };
    
   
} else if (window.innerWidth <= 490) {
    swiper.params.slidesPerView = 1;
} else {
    swiper.params.slidesPerView = 2.5;
}

})

// var swiper = new Swiper('.swiper', {
//     freeMode: true,
//     loop: true,
//     loopPreventsSlide: false,
//     keyboard: true,
//     mousewheel: true,
//     slidesPerView: 2.5,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// function updateSwiper() {
//     if (window.innerWidth <= 900) {
//         swiper.params.effect = 'coverflow';
//         swiper.params.coverflowEffect = {
//             rotate: 50,
//             stretch: 100,
//             depth: 100,
//             modifier: 0,
//             slideShadows: true,
//         };
//     } else {
//         swiper.params.effect = 'slide';
//         swiper.params.coverflowEffect = null;
//     }

//     swiper.update();
// }

// window.addEventListener('resize', updateSwiper);
// updateSwiper();

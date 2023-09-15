
const swiper = new Swiper('.swiper', {
    freeMode:true,
    loop: true,
    rotate:50,
    slidesPerView: 2.5,
    keyboard:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  
  window.addEventListener('resize', function() {
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

         swiper.body.height
      
    } else if (window.innerWidth <= 490) {
        swiper.params.slidesPerView = 1.5
        }
    else {
        swiper.params.slidesPerView = 2.5;
    }

});


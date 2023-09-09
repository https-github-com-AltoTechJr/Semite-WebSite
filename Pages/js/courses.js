
const swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    freeMode:true,
    slidesPerView: 2.5,
  });

  window.addEventListener('resize', function() {
    // Verifique o tamanho da tela usando uma media query
    if (window.innerWidth <= 650 && window.innerWidth > 490) { // Por exemplo, quando a largura da tela é igual ou menor que 768px
        swiper.params.slidesPerView = 1.5; // Atualize slidesPerView para 1.5
    } else if (window.innerWidth <= 490) {
        swiper.params.slidesPerView = 1
        }
    else {
        swiper.params.slidesPerView = 2.5; // Volte ao valor padrão
    }

    swiper.update(); // Atualize o Swiper para refletir as alterações
});
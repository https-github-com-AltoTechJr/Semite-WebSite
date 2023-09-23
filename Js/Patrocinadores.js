var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener('DOMContentLoaded', function () {
    var logosSlides = document.querySelectorAll('.logos-slide');

    logosSlides.forEach(function (div) {
        div.style.animation = '35s slide infinite linear';

        div.addEventListener('mouseenter', function () {
            pauseAnimation(logosSlides);
        });

        div.addEventListener('mouseleave', function () {
            resumeAnimation(logosSlides);
        });
    });

    function pauseAnimation(elements) {
        elements.forEach(function (element) {
            element.style.animationPlayState = 'paused';
        });
    }

    function resumeAnimation(elements) {
        elements.forEach(function (element) {
            element.style.animationPlayState = 'running';
        });
    }
});
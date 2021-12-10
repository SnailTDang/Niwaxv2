window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none'
    }, 1200)

    setTimeout (function() {
        const heroloading = document.querySelectorAll('.hero__load');
        const herotext = document.querySelector('.hero__text');
        const herobutton = document.querySelector('.hero-btn')
            
        // heroheading.classList.add('fadeInUp')
        for (const heroload of heroloading) {
            heroload.classList.add('fadeIn')
        }


    },1400)

    setTimeout(() => {
        const herodelays = document.querySelectorAll('.hero-delay');
        const slider = document.querySelector('#slider-container')

        for (const herodelay of herodelays) {
            herodelay.classList.add ('fadeIn');
        };

        slider.classList.add('faderight');

    }, 2000);

    

})

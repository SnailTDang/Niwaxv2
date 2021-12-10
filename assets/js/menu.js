window.addEventListener('load', function() {
    const links = document.querySelectorAll('.nav__item');
    const navbar = document.querySelector('.navbar');
    const header  = document.getElementById('header');
    const whitelogo = document.querySelector('.white-logo');
    const darklogo = document.querySelector('.dark-logo');
    const dmca = document.querySelector('.dmca');
    const menu = document.querySelector('.main-menu');
    const boxshadow = document.querySelector('.btn-menu');
    const topbutton = document.getElementById("scrolltop");
    const blacktexts = document.querySelectorAll('.nav__link');
    const linecolor = document.querySelector("#line-effect");

    const line = document.createElement('div');
    line.id = 'line-effect';
    document.getElementById('header').appendChild(line)

    const offsetBottom = 5;
    const offsetleft = 15;

    const black = "#f6bf9f";
    const white = "#dd8ed9";

    links.forEach(item => item.addEventListener('mouseenter', handleHoverlink));


    window.onscroll = function() {scrollFunction()};


    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        header.classList.add('whitebg');
        whitelogo.style.display = 'none';
        darklogo.style.display = 'block';
        line.style.backgroundColor = white;
        for ( const blacktext of blacktexts) {
            blacktext.classList.add('black')
        }

        
        } else {
        header.classList.remove('whitebg');
        darklogo.style.display = 'none';
        whitelogo.style.display = 'block';
        line.style.backgroundColor = black;
        for ( const blacktext of blacktexts) {
            blacktext.classList.remove('black')
        }

        } 
    }


    function handleHoverlink (event) {
        const {left, width, bottom, top, height} = event.target.getBoundingClientRect();
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${bottom - offsetBottom}px`;
        // line.style.top = `${top+height+offsetBottom}px`
        
    }

    navbar.addEventListener('mouseleave', e => {
        line.style.width = 0;
    })




    // window.onscroll = function() {scrollline()};

    // function scrollline() {
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //       line.style.backgroundColor = white;

    //     } else {
    //         line.style.backgroundColor = black;
    //     } 
    //   }

    $(document).ready(function(){
        $('.navbar .nav__item .nav__link').click(function(){
          $('.navbar .nav__item .nav__link').removeClass("active");
          $(this).addClass("active");
      });
    });


})

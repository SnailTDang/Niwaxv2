setTimeout(() => {
  $(".services-card").slick({
    dots: false,
    arrows: true,
    prevArrow: $(".pre"),
    nextArrow: $(".next"),
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    cssEase: "ease",
    speed: 1800,
  });
}, 1500);

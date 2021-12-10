$(".services-hover").hover3d({
    selector: ".services-item",
    sensitivity: -10,
    perspective   : 1000,
     // Helper class when mouse hover in the element
    hoverInClass  : "hover-in",

    // Helper class when mouse hover Out the element
    hoverOutClass : "hover-out",

    // Helper class when the mouse is hovering the element
    hoverClass    : "hover-3d"
});

$(".icon-hover").hover3d({
    selector: ".counter-icon",
    sensitivity: -2,
    perspective   : 1000,
     // Helper class when mouse hover in the element
    hoverInClass  : "hover-in",

    // Helper class when mouse hover Out the element
    hoverOutClass : "hover-out",

    // Helper class when the mouse is hovering the element
    hoverClass    : "hover-3d"
});
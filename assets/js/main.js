Fancybox.bind('[data-fancybox="gallery"]', {
    Hash: false,
    Thumbs: false,

    compact: false,

    contentClick: "toggleCover",
    wheel: "slide",

    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },

    Images: {
        Panzoom: {
            panMode: "mousemove",
            mouseMoveFactor: 1.1,
            mouseMoveFriction: 0.12
        },
    },
});

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
});


var swiper = new Swiper(".carousel", {
    slidesPerView: 1,
    spaceBetween: 5,
    grabCursor: true,
    loop: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        569: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    },
});
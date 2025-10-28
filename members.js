document.addEventListener("DOMContentLoaded", () => {
    var imageIndex = 0;
    const slides = document.querySelectorAll(".slide");
    console.log(slides.length);

    window.changeSlide = function(direction) {
        slides[imageIndex].classList.remove("active");
        imageIndex = (imageIndex + direction + slides.length) % slides.length;
        slides[imageIndex].classList.add("active");
    }
})
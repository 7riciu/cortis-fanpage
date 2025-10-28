document.addEventListener("DOMContentLoaded", () => {
    var imageIndex = 0;
    const slides = document.querySelectorAll(".slide");
    console.log(slides.length);

    const leftArrow = document.querySelector(".prev");
    const rightArrow = document.querySelector(".next");

    function changeSlide(direction) {
        slides[imageIndex].classList.remove("active");
        imageIndex = (imageIndex + direction + slides.length) % slides.length;
        slides[imageIndex].classList.add("active");
    }

    leftArrow.addEventListener("click", () => changeSlide(-1));
    rightArrow.addEventListener("click", () => changeSlide(1));
})
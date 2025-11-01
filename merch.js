document.addEventListener("DOMContentLoaded", () => {
    var album1 = document.getElementById("album1");
    album1.addEventListener("mouseenter", () => {
        album1.src = "images/album-1.png";
    });
    album1.addEventListener("mouseleave", () => {
        album1.src = "images/album-cover-1.png";
    });

    var album2 = document.getElementById("album2");
    album2.addEventListener("mouseenter", () => {
        album2.src = "images/album-2.png";
    });
    album2.addEventListener("mouseleave", () => {
        album2.src = "images/album-cover-2.png";
    });

    var album3 = document.getElementById("album3");
    album3.addEventListener("mouseenter", () => {
        album3.src = "images/album-3.png";
    });
    album3.addEventListener("mouseleave", () => {
        album3.src = "images/album-cover-3.png";
    });

    var cortisball = document.getElementById("cortisball");
    cortisball.addEventListener("mouseenter", () => {
        cortisball.src = "images/cortis-ball-2.png";
    });
    cortisball.addEventListener("mouseleave", () => {
        cortisball.src = "images/cortis-ball-1.png";
    });
});
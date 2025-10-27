document.addEventListener("DOMContentLoaded", () => {
    var discographyImage = document.getElementById('discography-image');
    discographyImage.addEventListener("mouseenter", () => {
        discographyImage.src = "images/music-hover.png";
    });
    discographyImage.addEventListener("mouseleave", () => {
        discographyImage.src = "images/music.png";
    });

    var membersImage = document.getElementById('members-image');
    membersImage.addEventListener("mouseenter", () => {
        membersImage.src = "images/members-hover.png";
    });
    membersImage.addEventListener("mouseleave", () => {
        membersImage.src = "images/members.png";
    });

    var merchImage = document.getElementById('merch-image');
    merchImage.addEventListener("mouseenter", () => {
        merchImage.src = "images/merch-hover.png";
    });
    merchImage.addEventListener("mouseleave", () => {
        merchImage.src = "images/merch.png";
    });

    var minigameImage = document.getElementById('minigame-image');
    minigameImage.addEventListener("mouseenter", () => {
        minigameImage.src = "images/console-hover.png";
    });
    minigameImage.addEventListener("mouseleave", () => {
        minigameImage.src = "images/console.png";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("paint-canvas");
    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
    var brush = document.getElementById("brush");

    var mouseX = 0;
    var mouseY = 0;
    var isDrawing = false;
    var color = document.getElementsByClassName("color")[0];
    var clear = document.getElementById("clear");
    var save = document.getElementById("save");

    context.strokeStyle = "black";

    brush.addEventListener("input", function(brush) {
        context.lineWidth = brush.target.value;
    });

    color.addEventListener("click", function(event) {
        context.strokeStyle = event.target.value || "black";
    });

    canvas.addEventListener("mousedown", function(event) {
        setMouseCoordinates(event);
        isDrawing = true;

        context.beginPath();
        context.moveTo(mouseX, mouseY);
    });

    canvas.addEventListener("mousemove", function(event) {
        setMouseCoordinates(event);

        if(isDrawing) {
            context.lineTo(mouseX, mouseY);
            context.stroke();
        }
    });

    canvas.addEventListener("mouseup", function(event) {
        setMouseCoordinates(event);
        isDrawing = false;
    });

    clear.addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    save.addEventListener("click", function() {
        var imageName = prompt("Name your creation!");
        var canvasDataURL = canvas.toDataURL();
        var a = document.createElement("a");
        a.href = canvasDataURL;
        a.download = imageName || "drawing";
        a.click();
    });

    function setMouseCoordinates(event) {
        mouseX = event.clientX - boundings.left;
        mouseY = event.clientY - boundings.top;
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
});
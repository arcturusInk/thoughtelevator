
$(document).foundation();

function changePic() {
    var image = document.getElementById('bulb');
    if (image.src.match("bulbon")) {
        image.src = "img/bulboff.jpg";
    } else {
        image.src = "img/bulbon.jpg";
    }
}

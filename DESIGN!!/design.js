var slideno = 1;
Carousel(slideno);

function Carousel(n) {
    var slides = document.getElementsByClassName("img-container");
    if (n > slides.length) {
        slideno = 1;
    }
    if (n < 1) {
        slideno = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideno - 1].style.display = "block";
    
}

function newslide(n){
    Carousel(slideno += n);
}

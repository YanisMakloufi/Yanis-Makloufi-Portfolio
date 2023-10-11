let constrain = 500;
let ex1Layer = document.getElementsByClassName("rotator")[0];
let ex2Layer = document.getElementsByClassName("parallax")[0];

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    return "perspective(calc(400px - 2vw)) "
        + "   rotateX("+ calcX*3 +"deg) "
        + "   rotateY("+ calcY +"deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
}

document.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    let box = ex2Layer.getBoundingClientRect();
    let calcY = -(xy[0] - box.x - (box.width / 2)) / constrain * 0.4;

    ex2Layer.style = "background-position: " + (calcY + 50) + "% center";
    transformElement(ex1Layer, position);
};

/*var $slider = document.getElementById("parallaxY");

function parallax() {
    $slider.style.backgroundPosition = '0%, 0% ' + -window.pageYOffset/5 + 'px';
}
window.addEventListener("scroll", function(){
    parallax();
});*/
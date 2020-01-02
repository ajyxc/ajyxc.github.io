var picPaths = ["img/drumstick/before_hit.svg", "img/drumstick/draw_hit.svg"];
var curPic = -1;
function bigImg() {
  imgCont = document.getElementById("img-hover");
  // imgCont.src = "img/drumstick/draw_hit.svg";
  swapImage();
}

function normalImg(x) {
  curPic = -1;
  imgCont.src = "img/drumstick/before_hit.svg";
}

//preload the images for smooth animation
var imgO = new Array();
for (i = 0; i < picPaths.length; i++) {
  imgO[i] = new Image();
  imgO[i].src = picPaths[i];
}

function swapImage() {
  curPic = ++curPic > picPaths.length - 1 ? 0 : curPic;
  imgCont.src = imgO[curPic].src;
  setTimeout(swapImage, 1000);
}

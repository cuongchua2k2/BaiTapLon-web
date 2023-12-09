const imgPosition = document.querySelectorAll(".banner__image");
const imgContainer = document.querySelector(".banner__list");
let index = 0;
imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
});
function imgSlide() {
  index++;
}
setInterval(imgSlide, 5000);

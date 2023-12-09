// console.log("hello world");
const imgPosition = document.querySelectorAll(".banner__list .banner__image");
const imgContainer = document.querySelector(".banner__list");
let index = 0;
imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
});
function imgSlide() {
  index++;
  imgContainer.style.left = "-" + index * 100 + "%";
}
setInterval(imgSlide, 5000);

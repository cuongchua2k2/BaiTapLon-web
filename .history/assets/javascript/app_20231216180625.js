// thêm và giảm số lượng sản phẩm
{
  function minusQuantity() {
    var result = document.getElementById("qty");
    var qty = result.value;
    if (!isNaN(qty) & (qty > 1)) result.value--;
    return false;
  }

  function addQuantity() {
    var result = document.getElementById("qty");
    var qty = result.value;
    if (!isNaN(qty)) result.value++;
    return false;
  }
}
//transition banner
{
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".banner__list");
    const slides = document.querySelectorAll(".banner__image");
    const dotItem = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function updateSlider() {
      const newTransformValue = -currentIndex * 100 + "%";
      slider.style.transform = `translateX(${newTransformValue})`;

      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
      });
      dotItem[index].addEventListener("click", function () {
        slideRun(index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
  });
}

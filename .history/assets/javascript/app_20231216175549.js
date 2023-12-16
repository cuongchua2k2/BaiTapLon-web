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
    let currentIndex = 0;
    const slides = document.querySelectorAll(".banner__image");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function currentSlide(index) {
      currentIndex = index - 1;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Chuyển đổi slide mỗi 3 giây
  });
}

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
  const imgItem = document.querySelectorAll(".banner__list img");
  const imgItemContainer = document.querySelector(".banner__list");
  const dotItem = document.querySelectorAll(".dot");
  let index = 0;
  let imgLeng = imgItem.length;
  imgItem.forEach(function (image, index) {
    image.style.left = index * 100 + "%";
    dotItem[index].addEventListener("click", function () {
      slideRun(index);
    });
  });
  function slider() {
    index++;
    if (index >= imgLeng) {
      index = 0;
    }
    slideRun(index);
  }
  function slideRun(index) {
    imgItemContainer.style.left = "-" + index * 100 + "%";
    const dotActive = document.querySelector(".active");
    dotActive.classList.remove("active");
    dotItem[index].classList.add("active");
  }
  setInterval(slider, 5000);
}

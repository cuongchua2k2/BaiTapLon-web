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

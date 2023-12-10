function minusQuantity(){
    var result = document.getElementById('minus-quantity'); 
    var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;
}

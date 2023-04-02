function incrementCartNumber(cartNumber){
    var cartNumber = document.getElementById("cart-value");
    var cartValue = parseInt(cartNumber.innerText);
    cartValue += 1;
    cartNumber.innerText = cartValue;
}

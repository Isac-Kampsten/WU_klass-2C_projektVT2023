const buttons = document.getElementsByClassName("basket-add-btn")
console.log(buttons)
const popupButton = document.getElementById("order-button")
const checkoutPopup = document.getElementById("checkoutPopup")
const openBasketButton = document.getElementById("openBasket")



function incrementCartNumber(cartNumber){
    var cartNumber = document.getElementById("cart-value");
    var cartValue = parseInt(cartNumber.innerText);
    cartValue += 1;
    cartNumber.innerText = cartValue;
}

function closePopup(popupWindow){
    popupWindow.style.top = -40 + '%'
    popupWindow.style.scale = 0.55
    popupWindow.style.margin = -10 + 'rem'
}

function openPopup(popupWindow){
    popupWindow.style.top = 50 + '%'
    popupWindow.style.scale = 1
    popupWindow.style.margin = 0 + 'rem'
}


for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", incrementCartNumber)
}

popupButton.addEventListener("click", function(){closePopup(checkoutPopup);});
openBasketButton.addEventListener("click", function(){openPopup(checkoutPopup);});
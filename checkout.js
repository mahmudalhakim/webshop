$(document).ready(function () {
    checkoutRepo.init();
})

let checkoutRepo = (function () {
    let init = function () {
        cartQuant();
        calcPrice();
        $("#remove-cart").on("click", removeCart)
    }
    let quant;
    let cartQuant = function () {
        quant = 5;
        $("#cart-quantity").text(quant);
        $("#add-quant").on("click", function () {
            ++quant;
            $("#cart-quantity").text(quant);
        })
        $("#remove-quant").on("click", function () {
            --quant;
            $("#cart-quantity").text(quant);
        })
    }

    let price;

    function calcPrice() {

    }

    //TODO: flytta till Cart.js
    function removeCart() {
        ls.clear();
    }



    return {
        init: init
    }
})();
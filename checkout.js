$(document).ready(function () {
    checkoutRepo.init();
})

let checkoutRepo = (function () {
    let init = function () {
        renderCart();
        cartQuant();
        calcPrice();
        $(".remove-cart").on("click", removeCart)
    }
    let quant = 1;
    let price;

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

    function renderCart() {
        let title = "title"
        let imgSrc = ""

        price = 1493;
        $("#render-cart").append(`
                                    <td>${title}</td>
                                    <td><img src="${imgSrc}" alt="Image"> </td>
                                    <td>
                                        <button id="add-quant" class="btn-flat transparent">+</button>
                                        <span id="cart-quantity">${quant}</span>
                                        <button id="remove-quant" class="btn-flat transparent">-</button>
                                    </td>
                                    <td>${price}</td> `)

    }


    let calcPrice = function () {
        if (price == undefined) {
            price = 0;
        } else {
            price * quant;
        }
        $("#price").text(price)
    }
    
    
    //TODO: flytta till Cart.js
    function removeCart() {
        ls.clear();
        $("#render-cart").remove(); //kanske ta bort?
        price = 0;
        calcPrice();
    }

    return {
        init: init, 
        calcPrice: calcPrice
    }
})();
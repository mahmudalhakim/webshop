$(document).ready(function () {
    checkoutRepo.init();
})

let checkoutRepo = (function () {
    let init = function () {
        currentBasket();
        getCartContent();
        calcPrice();
        $(".remove-cart").on("click", removeCart)
        $(document).on('click', "#plus", function (e) {
            e.preventDefault();

            let newProductQuantity = +$("#cart-quantity").text();
            let productId = $(this).data('id'); //tydligt vilket ID (produkt) som ska modifieras
            modifyProduct(productId, ++newProductQuantity);

        })
        $(document).on('click', "#minus", function (e) {
            e.preventDefault();

            let newProductQuantity = +$("#cart-quantity").text();
            let productId = $(this).data('id');

            modifyProduct(productId, --newProductQuantity);

        })
    }

    function modifyProduct(productId, newProductQuantity) {
        let productModel = cartRepository.populateProductModel(productId, newProductQuantity);

        if (newProductQuantity == 0) return;

        ls.removeItem(productId)
        ls.setItem(productId, productModel);
        $("#cart-quantity").text(newProductQuantity)

    }

    let price;

    let currentBasket = function () {
        let result = `<table>
            <thead>
            <tr>
                <th>Glasses</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Item Price</th>
            </tr>
                    </thead >
        <tbody>
            ${getCartContent()}
    </tbody>
    </table>`;
        $("#display-cart").html(result)
    };

    function getCartContent() {
        let productContent = '';
        for (let i = 0; i < localStorage.length; i++) {

            let product = ls.getItem(localStorage.key(i));
            productContent += `<tr id="render-cart">            
                                    <td>${product.title}</td>
                                        <td><img src="${product.img}" alt="Image"> </td>
                                        <td>
                                            <button data-id="${product.id}" id="plus" class="btn-flat transparent">+</button>
                                            <span id="cart-quantity">${product.quantity}</span>
                                            <button data-id="${product.id}" id="minus" class="btn-flat transparent">-</button>
                                        </td>
                                        <td>${product.price}</td> 
                                        </tr>
                                        `
        }
        return productContent
    }

    let calcPrice = function () {
        if (price == undefined) {
            price = 0;
        } else {
            price;
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
        calcPrice: calcPrice,
        currentBasket: currentBasket
    }

})();
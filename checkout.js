$(document).ready(function () {
    checkoutRepo.init();
})

let checkoutRepo = (function () {
    let init = function () {
        currentBasket();
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
        let totalPrice = null;

        for (let i = 0; i < localStorage.length; i++) {
            let product = ls.getItem(localStorage.key(i));
            productContent += `<tr id="render-cart">            
                                    <td>${product.title}</td>
                                        <td><img src="${product.img}" alt="Image"> </td>
                                        <td>
                                        <select data-id="${product.id}" class="select-q">
                                        <option value="" disabled selected>${product.quantity}</option>
                                        ${getOptions(product.inStock)}
                                            
                                        </select>
                                        </td>
                                        <td>${product.price}</td> 
                                        </tr>
                                        `

            totalPrice += product.price * product.quantity;

        }
        $("#price").text(totalPrice + "kr")

        return productContent;
    }

    function test() {


    }



    $(document).on("change", ".select-q", function () {
        let newProductQuantity = ($(this).val())
        let productId = $(this).data('id'); //tydligt vilket ID (produkt) som ska modifieras
        let productModel = cartRepository.populateProductModel(productId, newProductQuantity);

        $("#apa").text(newProductQuantity)
        ls.removeItem(productId)
        ls.setItem(productId, productModel);


        getCartContent();
    })

    function getOptions(stock) {
        let options = "";
        for (let i = 1; i < stock +1; i++) {
            options += `<option id="hej" value="${[i]}">${[i]}</option>`
        }
        return options;
    }

    //TODO: flytta till Cart.js
    function removeCart() {
        ls.clear();
        // $("#render-cart").remove();
        calculateQuantity(0, 0)
    }

    return {
        init: init,
        currentBasket: currentBasket
    }

})();
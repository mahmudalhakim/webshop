$(document).ready(function () {
    checkoutRepo.init();
})

let checkoutRepo = (function () {
    let init = function () {
        currentBasket();

    }
    let currentBasket = function () {
        let result = `<table>
            <thead>
            <tr>
                <th>Glasses</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th>Remove</th>
            </tr>
                    </thead >
        <tbody>
            ${getCartContent()}
    </tbody>
    </table>`;
        $("#display-cart").html(result)
    };

    let getCartContent = function () {
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
                                        <td><button data-remove="${product.id}" class="remove">x</button></td> 
                                        </tr>
                                        `

            totalPrice += product.price * product.quantity;
        }
        if (totalPrice == null) {
            totalPrice = 0;
        }

        $("#price").text(totalPrice + "kr")
        return productContent;
    }



    $(document).on("click", ".remove", function () {
        let productId = $(this).data('remove');
        ls.removeItem(productId);
        getCartContent();
        location.reload()

    })


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
        for (let i = 1; i < stock + 1; i++) {
            options += `<option id="hej" value="${[i]}">${[i]}</option>`
        }
        return options;
    }

    //TODO: flytta till Cart.js


    return {
        init: init,
        currentBasket: currentBasket,
        getCartContent: getCartContent
    }

})();
$(document).ready(function () {
    orderConfirmation.init();
})

let orderConfirmation = (function () {
    let init = function () {
        currentBasket();
        getCartContent();
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
        $("#orderConfirmation").html(result)
    };

    function getCartContent() {
        let productContent = '';
        for (let i = 0; i < localStorage.length; i++) {

            let product = ls.getItem(localStorage.key(i));
            productContent += `<tr id="orderConfirmation">            
                                            <td>${product.title}</td>
                                            <td><img src="${product.img}" alt="Image"></td>
                                        <td>
                                            <span id="cart-quantity">${product.quantity}</span>
                                        </td>
                                            <td>${product.price}</td> 
                                        </tr>
                                        <tr>
                                        <td></td>
                                            <td colspan=2>Description: ${product.description}</td>
                                        </tr>
                                        `
        }
        return productContent
    }

    return {
        init: init,
    }

})(); // IIFE
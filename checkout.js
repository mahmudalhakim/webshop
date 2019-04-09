$(document).ready(function () {
    checkoutRepo.init();
})

let checkoutRepo = (function () {
    let init = function () {
        currentBasket();
        validate();
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
                                        <td><img class="checkout-img" src="${product.img}" alt="${product.title}"> </td>
                                        <td>
                                        <select data-id="${product.id}" class="select-q">
                                        <option value="" disabled selected>${product.quantity}</option>
                                        ${getOptions(product.inStock)}
                                            
                                        </select>
                                        </td>
                                        <td>${product.price}kr</td> 
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

    
    /* OURVALIDATE START */
    let validate = function() {
        $('.cart-btn').click(function () {
            let fname = $('#first-name').val();
            let lname = $('#last-name').val();
            let email = $('#email').val();
            let phone = $('#phone').val();
            let message = $('#message').val();
            console.log(fname + lname + email + phone + message);
            if (fname == '') {
                alert('Please enter a valid Name');
                return false;
            }
            if (lname == '') {
                alert('Please enter a valid Last name');
                return false;
            }
            if (phone == '') {
                alert('Please enter a valid phone number');
                return false;
            }
            if (email == '') {
                alert('Please enter an email address');
                return false;
            }
            if (IsEmail(email) == false) {
                alert('Please enter a valid email address');
                return false;
            }
            return false;
        });

        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }
    }
    /* OURVALIDATE FINISH*/

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
        getCartContent: getCartContent,
        validate: validate
    }

})(); //IIFE
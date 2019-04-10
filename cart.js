$(document).ready(function () {
    cartRepository.init(); 
})

let cartRepository = (function () { 
    let init = function () {
        checkCartCount();
        $(document).on('click', '#addToBasket', function (e) {

            e.preventDefault();

            let productId = $(this).data("id");
            let quantity = $(".select-quantity").val();

            //Skapar en ny productModel som sätter in antalet glasögon/modell. Skriver inte över JSON, bara till LS.
            let productModel = populateProductModel(productId, quantity)

            let id = productModel.id;
            // console.log(productModel);
            ls.setItem(id, productModel)
        });
        $(".remove-cart").on("click", function () {
            removeCart();
        })
    }

    let populateProductModel = function (productId, quantity) {
        let product = findProductFromFile(productId);

        let productModel = {
            id: product.id,
            title: product.title,
            quantity: quantity,
            img: product.img,
            price: product.price,
            description: product.description,
            inStock:product.inStock
        }
        return productModel;
    }

    function findProductFromFile(productId) {
        let product;

        $.ajax({
            url: 'glasses.json',
            dataType: 'json', //json data type
            success: function (result) {
                product = result.glasses[productId - 1]; //Hämtar objektet
            },
            error: function () { alert('feeel') },
            async: false,
        });
        return product;

    }

    function removeCart() {
        ls.clear();

        $("#render-cart").remove();
        checkoutRepo.getCartContent()
        location.reload();
    }

    // Kollar om det ligger nått i kundvagnen redan
    function checkCartCount() {
        let checkCartStatus = Object.keys(localStorage).length; // Hämtar antal objekt från local storage, om det finns nått där
        let cartItems = $('.cart-items'); // Hämtar bara platsen, för att kunna uppdatera den sedan med värde
        checkCartStatus == null ? 0 : checkCartStatus // Kollar hur många nycklar som finn i varukorgen sen tidigare, dvs hur många varor som finns i korgen. Om det inte finns några varor i LocalStorage så sätter den 0, annars sätter den värdet som hämtar från localstorage.
        cartItems.text(checkCartStatus);
    }

    return {
        init: init,
        populateProductModel: populateProductModel
    }

})(); //IIFE funktion för att den ska köras direkt. 
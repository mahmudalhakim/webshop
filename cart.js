$(document).ready(function () {
    cartRepository.init(); // document ready, första som körs. Se user status om personen har varit inne tidigare. Kolla i lokal storage. 
})

let cartRepository = (function () { // Vad och när saker ska hända
    let init = function () {
        checkCartCount();
        $(document).on('click', '#addToBasket', function (e) {

            e.preventDefault();

            let productId = $(this).data("id");
            let quantity = $(".select-quantity").val();

            //Create a new productmodel that sets the quantiy of glasses in it.
            let productModel = populateProductModel(productId, quantity)

            let id = productModel.id;
            console.log(productModel);
            ls.setItem(id, productModel)


        });
    }

    let populateProductModel = function (productId, quantity) {
        let product = findProductFromFile(productId);

        let productModel = {
            id: product.id,
            title: product.title,
            img: product.img,
            price: product.price,
            quantity: quantity

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

    function success(result) {
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
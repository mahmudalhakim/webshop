$(document).ready(function () {
    cartRepository.init(); // document ready, första som körs. Se user status om personen har varit inne tidigare. Kolla i lokal storage. 
})

let cartRepository = (function () {
    let init = function () {
        checkCartCount();
    }

    // Vid klick, skicka objektet till lokalstorage
    // Click 
    $('.selling-btn').on('click', function () {
        $.getJSON("glasses.json", function (response) {
            console.log(response.name);
            $("#showOrder").html(response.title + '<br>' +
                response.name);
        });
        cartItems = ls.setItem('aviator', 'objekt för aviator');
        console.log(cartItems + 'hejsan');
        alert('The button was clicked');
    });

    // Kollar om det ligger nått i kundvagnen redan
    function checkCartCount() {
        let checkCartStatus = Object.keys(localStorage).length; // Hämtar antal objekt från local storage, om det finns nått där
        let cartItems = $('.cart-items'); // Hämtar bara platsen, för att kunna uppdatera den sedan med värde
        checkCartStatus == null ? 0 : checkCartStatus // Kollar hur många nycklar som finn i varukorgen sen tidigare, dvs hur många varor som finns i korgen. Om det inte finns några varor i LocalStorage så sätter den 0, annars sätter den värdet som hämtar från localstorage.
        cartItems.text(checkCartStatus);
    }

    return {
        init: init
    }

})(); //IIFE funktion för att den ska köras direkt. 
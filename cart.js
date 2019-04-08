$(document).ready(function () {
    cartRepository.init(); // document ready, första som körs. Se user status om personen har varit inne tidigare. Kolla i lokal storage. 
})

let cartRepository = (function () { // Vad och när saker ska hända
    let init = function () {
        checkCartCount();
        $('#addToBasket').on('click', addToBasket());
    }

    // Vid klick, skicka objektet till lokalstorage
    function addToBasket() {
        let cartItem = productRepository.getUrlParameter('id'); // Sätter cartItem till id-värdet
        $.getJSON("glasses.json", function (response) {
            let quant = 6;
            let glasses = response.glasses[cartItem - 1]; //Hämtar objektet
            let quantAndId = [quant, cartItem];
            console.log(Array.isArray(quantAndId));
            ls.setItem(glasses.title, quantAndId); // Hämtar title (namnet på glasses och antal)
            console.log(glasses.title + quantAndId);
        })
    };


    let itemsInBasket = function () {

    };


    /* var array1 = ['a', 'b', 'c'];
            console.log('START');
            array1.forEach(function (element) {
                console.log(element);
            });
            console.log('FINISH'); */

    /*
    $.getJSON(url, function(response){
            console.log(response);
            // dogs är en collection som innehåller key/value
            // key är en hundras
            // value är en array med sub-breeds
            let dogs = response.message;
            console.log(dogs);

            $.each(dogs, function(dog) {
                console.log(dog);
                $('select').append(`<option value="${dog}">${dog}</option>`);
            })
    
    
    
    
    let myJSON = JSON.stringify(myArray);
    console.log(myJSON);
    localStorage.setItem('myArray', myJSON);
    console.table(localStorage); */

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
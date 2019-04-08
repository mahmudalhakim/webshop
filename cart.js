$(document).ready(function () {
    cartRepository.init(); // document ready, första som körs. Se user status om personen har varit inne tidigare. Kolla i lokal storage. 
})

let cartRepository = (function () { // Vad och när saker ska hända
    let init = function () {
        checkCartCount();
        /* itemsInBasket(); */
        $('#addToBasket').on('click', addToBasket());
    }

    // Vid klick, skicka objektet till lokalstorage
    function addToBasket() {
        let cartItem = productRepository.getUrlParameter('id'); // Sätter cartItem till id-värdet
        $.getJSON("glasses.json", function (response) {
            let quant = '';
            let glasses = response.glasses[cartItem - 1]; //Hämtar objektet
            let quantAndId = [quant, cartItem];
            console.log(quantAndId[0]);
            console.log(Array.isArray(quantAndId)); // Retunerar TRUE
            ls.setItem(glasses.id, quantAndId); // Sätter id (key) (namnet på glasses och antal)
        })
    };
    
    let currentBasket = function() {
        let result = [];
        for (var i = 0; i < localStorage.length; i++) { // Loopar över LS och jämför id
            let currentId = (localStorage.key([i]));
            let output = productRepository.getProduct(currentId); // Kollar vilka som stämmer överens med JSON (vad retuneras???)
           
            output.then(function (input) {
            console.log(input[0]); // Retunerar objektet
               result.push(input[0]);
            })
        }
        return result;
    }
    console.log(currentBasket());

function displayBasket () {

}

/* 
for (var i = 0; i < localStorage.length; i++) {
            let result = `Value : ${localStorage.getItem(localStorage.key(i))}`;
            document.getElementById('result').innerHTML += `<li>${result}</li>`
            console.log("Väder: " + localStorage.getItem(localStorage.key(i)));
        }

        for (var i = 0; i < localStorage.length; i++) {
            let resultKey = `Key : ${localStorage.key(i)}`;
            let resultValue = `Value : ${localStorage.getItem(localStorage.key(i))}`;
            document.getElementById('infoTable').innerHTML += `
            <table>
            <tr>
                    <td>${resultKey}</td>

                <td>${resultValue}</td>
            </tr>
            </table>`
        }

int res = 0;
for (int i = 0 ; i != 3 ; i++) {
   res = calculateResult(i, res);
}
return res;



getProduct(currentId).then(function (returndata) {
        let productModel = getProductContent(returndata[0]);
        productContainer.append(productModel) */




   
    
    
    // Kollar om det ligger nått i kundvagnen redan
    function checkCartCount() {
        let checkCartStatus = Object.keys(localStorage).length; // Hämtar antal objekt från local storage, om det finns nått där
        let cartItems = $('.cart-items'); // Hämtar bara platsen, för att kunna uppdatera den sedan med värde
        checkCartStatus == null ? 0 : checkCartStatus // Kollar hur många nycklar som finn i varukorgen sen tidigare, dvs hur många varor som finns i korgen. Om det inte finns några varor i LocalStorage så sätter den 0, annars sätter den värdet som hämtar från localstorage.
        cartItems.text(checkCartStatus);
    }

    return {
        init: init,
        currentBasket: currentBasket
    }

})(); //IIFE funktion för att den ska köras direkt. 
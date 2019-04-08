$(document).ready(function () {
    mainRepository.init();

})
let mainRepository = (function () {
    let init = function () {
        dropdown_cart();
        $("#payment-method").hide();
        $("#continue_payment").on('click', paymentMethod);

    }

    function paymentMethod() {
        $("#payment-method").show();

    }

    function dropdown_cart() {
        let li = `<li><a href="">
        <img src="" alt="apa">
        <span class="cart-title">Title</span>
        <p class="cart-qty">Quantity: </p>
        <p class="cart-price">Price: </p>
</a></li>`

        /* let calculatedPrice = checkoutRepo.calcPrice();
        let liPrice = `<li><a href=""><p class="cart-price">Price: <span id="price"></span>kr</p></a></li> <li class="dusty-coral"><a href="checkout.html">To checkout</a></li>`; */
        let array = new Array(3)
        for (let i = 0; i < array.length; i++) {
            $("#dropdown1").prepend(li)
        }

        /* $("#dropdown1").append(liPrice) */
    }

    $("button[type=submit]").click(function (e) {
        e.preventDefault();
        // alert("hej")
        window.location.href = '/success.html';
    })


    return {
        init: init,
    }
})();
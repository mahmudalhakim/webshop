$(document).ready(function () {
    mainRepository.init();

})
let mainRepository = (function () {
    let init = function () {
        $("#payment-method").hide();
        $("#continue_payment").on('click', paymentMethod);

    }

    function paymentMethod() {
        $("#payment-method").show();

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
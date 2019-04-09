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
        window.location.href = '/success.html'; // Länkas automatiskt till success-sidan när man har fullt i alla uppgifter
    })

    return {
        init: init,
    }
})();
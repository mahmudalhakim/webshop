$(document).ready(function () {
    mainRepository.init();
  
})
let mainRepository = (function () {
    let init = function () {
        $("#payment-method").hide();
        $("#continue_payment").on('click', paymentMethod);
        
    }
    
    
    function paymentMethod () {
        $("#payment-method").show();
        
    }
    return {
        init: init,
    }
})();
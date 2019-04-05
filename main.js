$(document).ready(function () {
    mainRepository.init();
    $(".dropdown-trigger").dropdown();
    $(document).ready(function(){
        $('.sidenav').sidenav();
      });
})
let mainRepository = (function () {
    let init = function () {
        // alert("tja")
       

    }
    return {
        init: init,
    }
})();
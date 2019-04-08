$(document).ready(function () {
    materializeRepo.init();

})


let materializeRepo = (function () {
    let init = function () {        
        $(".dropdown-trigger").dropdown();
        $('.sidenav').sidenav();
        
        select();
    }


    function select() {
        // Or with jQuery

        $(document).ready(function () {
            $('select').formSelect();
        });
    }

    return {
        init: init,
    }


})();
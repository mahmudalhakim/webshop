$(document).ready(function () {
    materializeRepo.init();
})

let materializeRepo = (function () {
    let init = function () {
        $('.sidenav').sidenav();
        select();
    }

    //Från materialize
    function select() {
        $(document).ready(function () {
            $('select').formSelect();
        });
    }

    return {
        init: init,
    }
    
})();
$(document).ready(function () {
    materializeRepo.init();

})


let materializeRepo = (function () {
    let init = function () {
        autoComplete();
        select();
    }

    function autoComplete() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.autocomplete');
            var instances = M.Autocomplete.init(elems, options);
        });


        // Or with jQuery

        $(document).ready(function () {
            $('input.autocomplete').autocomplete({
                data: {
                    "Apple": null,
                    "Microsoft": null,
                    "Google": 'https://placehold.it/250x250'
                },
            });
        });
    }

    function select() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
        });

        // Or with jQuery

        $(document).ready(function () {
            $('select').formSelect();
        });
    }

    return {
        init: init,
    }


})();
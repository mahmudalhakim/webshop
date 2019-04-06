$(document).ready(function () {
    productList.init();
})

let productList = (function () {
    let init = function () {
        renderProducts();
        // alert("yes")
    }

    function renderProducts() {
        $.getJSON("glasses.json", function (response) {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                // console.log(response[i].title);       
                $('#card-title').text(response[i].title)
                



                $(".demo").append(response[i].title + '<br>' +
                    response[i].price);
            }

        });
    }

    return {
        init: init
    }
})();
$(document).ready(function () {
    productList.init();

})

let productList = (function () {
    let init = function () {
        renderProducts();
    }

    function renderProducts() {
        $.getJSON('glasses.json', function (data) {
            let glasses = data.glasses;
            console.log(glasses)

            $.each(glasses, function (key, product) {
                let productList = $("#product-list");

           
                productElement = `
                <div class="col s12 m4 z-depth-2 ">
                    <div class="card">
                        <div class="card-image_wrap">
                            <a href="/${product.title}">
                                <div class="card-image"><img src="${product.img}">
                                <a class="btn-floating hoverable halfway-fab waves-effect waves-light red">
                                <i class="material-icons">favorite_border</i></a>
                                </div>
                            </a>
                    </div>
                <div class="card-container">
                    <div class="card-content">
                        <span class="card-title">${product.title}</span>
                        <p class="card-description">${product.description}</p>
                    </div>
                    <div class="card-action">
                    <a href="/${product.title}">${product.price}</a><a href="/${product.title}" class="waves-effect waves-light btn selling-btn">Buy now</a>
                    </div>
                </div>
                </div> `

                productList.append(productElement)

            })
        });
    }

    return {
        init: init
    }
})();

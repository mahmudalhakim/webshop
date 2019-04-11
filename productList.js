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

            $.each(glasses, function (key, product) {
                let productList = $("#product-list");
                let productUrl = `https://mikaelaj.github.io/webshop/product.html?id=${product.id}`

                productElement = `
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image_wrap">
                            <a href="${productUrl}">
                                <div class="card-image"><img src="${product.img}">
                            </a>
                    </div>
                <div class="card-container">
                    <div class="card-content">
                        <span class="card-title">${product.title}</span>
                        <p class="card-description">${product.description}</p>
                    </div>
                    <div class="card-action">
                    <a href="${productUrl}">${product.price}</a><a href="${productUrl}" class="waves-effect waves-light btn selling-btn">Buy now</a>
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
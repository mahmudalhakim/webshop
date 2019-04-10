$(document).ready(function () {
    productRepository.init();
})

let productRepository = (function () {
    let init = function () {
        let productContainer = $("#product-container");
        let currentId = getUrlParameter('id');

        getProduct(currentId).then(function (returndata) {
            let productModel = getProductContent(returndata[0]);
            productContainer.append(productModel)
        })
    }

    function getProductContent(product) {
        return `
        <div class="col s12 m6">
                          <div class="product-img_container">
                              <img class="product-img dusty-green z-depth-2 hoverable" src="${product.img}" alt="">
                              
                          </div>
                      </div>
                      <div class="col s12 m5 offset-m1">
                          <h2>${product.title}</h2>
                          <h5>${product.price}<span class="thin ml-4 product-small">Inkl. VAT</span></h5>
                          <p>${product.description}</p>
                          <p class="mt-4"><strong>Color:</strong> Black</p>
                          <div class="product-sell_wrap">
                              <div class="input-field col s12 m3">
                                  <select class="select-quantity">
                                      ${getStockValue(product.inStock)} 
                                  </select>
                              </div>
                              <a href="" id="addToBasket" data-id="${product.id}" class="btn-large waves-effect waves-light ml-20"><i
                                      class="material-icons left">shopping_cart</i>Add to cart</a>
  
                          </div>
                          <div class="delivery-info">
                          <p class="product-smallest">Lagerstatus: <span id="inStore">${product.inStock}</span></p>
                          <p class="product-smallest italic"><strong><i class="material-icons left">local_shipping</i> Standard</strong> delivery all over the world</p>
                          </div>
                      </div>`
    }

    let getStockValue = function(inStock) {
        let selections;

        for (let i = 1; i <= inStock; i++) {
            selections += `<option value="${[i]}">${[i]}</option>`;
        }
        return selections;
    }

    let getUrlParameter = function (sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('?'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    let getProduct = function (currentId) { //Publik
        return $.getJSON('glasses.json').then(function (data) {
            return data.glasses.filter(function (product) {
                return product.id == currentId;
            });
        });
    }

    return {
        init: init,
        getUrlParameter: getUrlParameter,
        getProduct: getProduct, 
        getStockValue: getStockValue
    }
})();
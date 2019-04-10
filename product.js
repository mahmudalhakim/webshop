$(document).ready(function () {
    productRepository.init();
})

let productRepository = (function () {
    let init = function () {
        let productContainer = $("#product-container");
        let currentId = getUrlParameter('id');

        getProduct(currentId).then(function (returndata) {
            let productModel = _getProductContent(returndata[0]);
            productContainer.append(productModel)
        })
    }

    function _getProductContent(product) {
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


    //Hjälp från http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
    let getUrlParameter = function (Param) {
        let PageURL = window.location.search.substring(1),
            URLVariables = PageURL.split('?'), //I urlen står det ?id=x så den splittar från ?
            parameterName,
            i;

        for (i = 0; i < URLVariables.length; i++) {
            parameterName = URLVariables[i].split('='); //splittar från = så att ID kommer ut

            if (parameterName[0] === Param) {
                return parameterName[1] === undefined ? true : decodeURIComponent(parameterName[1]);
            }
        }
    };

    let getProduct = function (currentId) { //Publik
        return $.getJSON('glasses.json').then(function (data) { //Använder then för att det asynkrona JSONanropet ska bli färdigt innan funktionen körs
            return data.glasses.filter(function (product) { //Filtrera JSONfilen
                return product.id == currentId; //Matcha ID från JSON-filen med det aktuella idt
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
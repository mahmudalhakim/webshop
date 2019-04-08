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
        console.log(product);
        
        return `
        <div class="col s12 m6">
                          <div class="product-img_container">
                              <img class="product-img dusty-green z-depth-2 hoverable" src="${product.img}" alt="">
                              <div class="justify-center">
                                  <img class="product-img_tiny dusty-green z-depth-2 hoverable" src="${product.img}"
                                      alt="Closeup avaitor">
                                  <img class="product-img_tiny dusty-green z-depth-2 hoverable" src="${product.img}"
                                      alt="Closeup avaitor">
                                  <img class="product-img_tiny dusty-green z-depth-2 hoverable" src="${product.img}"
                                      alt="Closeup avaitor">
                              </div>
                          </div>
                      </div>
                      <div class="col s12 m5 offset-m1">
                          <h2>${product.title}</h2>
                          <h5>${product.price}<span class="thin ml-4 product-small">Inkl. VAT</span></h5>
                          <p>${product.description}</p>
                          <p class="mt-4"><strong>Color:</strong> Black</p>
                          <div class="product-sell_wrap">
                              <div class="col s12 m3">
                                  <select>
                                      <option value="" disabled selected>pcs</option>
                                      ${getStockValue(product.inStock)} 
                                  </select>
                              </div>
                              <a href="" class="btn-large waves-effect waves-light ml-20"><i
                                      class="material-icons left">shopping_cart</i>Add to cart</a>
  
                          </div>
                          <p class="product-smallest">Lagerstatus: <span id="inStore">${product.inStock}</span></p>
                          <p class="product-smallest italic"><strong><i class="material-icons left">local_shipping</i> Standard</strong> delivery all over the world</p>
                      </div>`
    }

    function getStockValue(inStock) {
        let selections;
        
        for (let i = 1; i <= inStock; i++) {
            selections += `<option value="${[i]}">${[i]}</option>`;
        }
        
        return selections;
    }

    function getUrlParameter(sParam) {
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

    function getProduct(currentId) {
        return $.getJSON('glasses.json').then(function (data) {
            return data.glasses.filter(function (product) {
                return product.id == currentId;
            });
        });
    }

    return {
        init: init
    }
})();
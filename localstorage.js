let ls = (function () {
    let setItem = function (key, value) {

        localStorage.setItem(key, value)
    }

    let getItem = function (key) {
        return localStorage.getItem(key);
        
    }
    return {
        setItem: setItem,
        getItem: getItem,
    };
})();
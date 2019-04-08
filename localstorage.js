let ls = (function () {
    let setItem = function (key, value) {
        localStorage.setItem(key, value)
    }

    let getItem = function (key) {
        return localStorage.getItem(key);
        
    }

    let removeItem = function (key) {
        return localStorage.removeItem(key);
    }

    let clear = function (key) {
        return localStorage.clear();
    }

    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        clear: clear,
    };
})();
// Observer 1
var observer = {                                            // 옵저버 객체를 만듦
    products: {},                                           // 각 모듈에서 등록할 객체들을 담아둘 내부 변수
    register: function (productName, product) {             // 객체를 등록하는 함수
        var productArray = this.products[productName];      // 기존에 등록된 객체가 있는지 확인하고
        if (undefined === productArray) {
            productArray = this.products[productName];      // 없으면 배열을 할당
        }

        productArray.push({product:product});               // 전달받은 객체를 배열에 추가
    },

    unregister: function(productName, product) {            // 객체를 삭제하는 함수
        var productArray = this.products[productName];
        if (undefined === productArray) {
            return;
        }
        for (i = 0; i < productArray.length; i++) {         // 삭제할 객체를 배열에서 찾음
            var thisProduct = productArray[i];

            if(product === thisProduct['product']) {
                productArray.splice(i, 1);                  // 찾았다면 삭제하고 함수 종료
                return;
            }
        }
    },

    notifyBuyAll: function(productName) {
        var productArray = this.products[productName];
        if (undefined === productArray) {
            return;
        }

        else {
            for (i = 0; i < productArray.length; i++) {
                var thisProduct = productArray[i];
                thisProduct.BuyContext();                   // 모든 객체를 구매하기로 넘김(수정 필요)
            }
        }
    },

    notifyClear: function(productName) {
        var productArray = this.products[productName];
        if (undefined === productArray) {
            return;
        }

        else {
            productArray.splice(0, productArray.length);
        }
    }
};

// Observer 2
var DataManager = (function() {
    function DataManager() {
        this.items = [];
    }

    DataManager.prototype.register = function(product) {
        this.items.push(product);
    };

    DataManager.prototype.unregister = function(product) {
        if (items === undefined)
            return;
        else {
            this.items = this.items.filter((_name) => _name !== product);
        }
    };

    DataManager.prototype.notifyBuyAll = function() {
        this.items.forEach((product) => {
            try {
                product.update(item);
            } catch {
                console.log("장바구니에 물건이 없습니다.");
            }
        })
    };

    DataManager.prototype.notifyClear = function () {
        this.items.splice(0, this.items.length);
    };

    return DataManager;
})();

var Products = (function() {
    function Products() {
    }
    // 받아올 객체를 넣어야 함
    Products.prototype.viewBasket = function(product) {
        
    }

    

    return Products;
})();


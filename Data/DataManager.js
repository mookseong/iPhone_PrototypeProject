import { Basket } from "../Function/basket/Basket.js";

// 제품 등록, 제품 삭제, 리스트 보여주기
export const DataManager = (function() {
    var item;   // var 키워드로 블록 스코프를 만들어 item에 외부에서 item에 접근할 수 없게 함

    function DataManager(data) {
        item = data ? data : '';
        this.dataList = [];
    };
    // get, set메서드를 사용하여 사용자가 item에 직접 접근할 수 없게 함.(캡슐화)
    DataManager.prototype = {
        getData : function() {
            return item;
        },
        setData : function(data) {
            item = data;
        }
    };
    DataManager.prototype.register = function(item) {
        this.dataList.push(item);
    }
    // 장바구니에서 deleteItem이 실행되면 dataList에서 item을 찾아 항목을 삭제함
    DataManager.prototype.unregister = function(item) {
        this.dataList = this.dataList.filter((iName) => iName !== item);
        console.log("항목을 삭제했습니다.");
    };
    // 장바구니에서 showList가 실행되면 dataList를 출력해줌
    DataManager.prototype.getDataList = function() {
        this.dataList.forEach((item) => {
            try {
                item.update();
            } catch {
                console.log("장바구니에 물건이 없습니다.");
            }
        })
    }
    return DataManager;
}());

const Product = (function() {
    function Product(name) {
        this.name = name;
    };
    Product.prototype.update = function() {
        console.log(`${this.name}이 장바구니에 있습니다.`)
    }
    return Product;
})();


// testcode
const datamanager = new DataManager;

const iPhone = new Product('iPhone');
const iPad = new Product('iPad');
const Airpods = new Product('Airpods');

datamanager.register(iPhone);
datamanager.register(iPad);
datamanager.register(Airpods);
console.log(datamanager.getDataList());     // 항목을 출력하고 마지막에 undefined 까지 출력함...

datamanager.unregister(iPhone);
console.log(datamanager.getDataList());


/* 수량 조졀 + notifyAll 코드
DataManager.prototype.plusAmount = function(item) {
    this.dataList.some(function(iName) {
        console.log(iName.item, item, iName.item === item);
        if (iName.item === item) {
            ++iName.amount;
            return true;
        }
    });
};
DataManager.prototype.minusAmount = function(item) {
    this.dataList.some(function(iName) {
        console.log(iName.item, item, iName.item === item);
        if (iName.item === item) {
            --iName.amount;
            return true;
        }
    });
};
DataManager.prototype.notifyAll = function() {
    this.dataList.forEach((allData) => {
        try {
            allData.update(dataList);
        } catch {
            console.log("물건이 없습니다.");
        }
    });
};
*/
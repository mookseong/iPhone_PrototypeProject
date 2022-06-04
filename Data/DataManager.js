var DataManager = (function() {
    function DataManager() {
        this.dataList = [];
    };
    DataManager.prototype.register = function(item) {
        this.dataList.push({item : item, amount : 1});
    };
    DataManager.prototype.unregister = function(item) {
        this.dataList = this.dataList.filter((iName) => iName.item !== item);
    };
    DataManager.prototype.getDataList = function() {
        return this.dataList;
    }
    DataManager.prototype.addItem = function(item) {
        this.dataList.forEach(function(iName) {
            console.log(iName.item, item, iName.item === item);
            if (iName.item === item) {
                ++iName.amount;
            }
        });
    };
    DataManager.prototype.deleteItem = function(item) {
        this.dataList.forEach(function(iName) {
            console.log(iName.item, item, iName.item === item);
            if (iName.item === item) {
                --iName.amount;
            }
        });
    };
    DataManager.prototype.notifyAll = function() {
        this.dataList.forEach((allData) => {
            try {
                allData.update(this);
            } catch {
                console.log("물건이 없습니다.");
            }
        });
    };
    return DataManager;
})();

function Product(name) {
    this.name = name;
    Product.prototype.update = function(datamanager) {
        console.log(`${this.name}이(가) 장바구니에 있습니다.`);
    }
}

// testCode
const datamanager = new DataManager();

const iPhone = new Product('iPhone');
const iPad = new Product('iPad');

datamanager.register(iPhone);
datamanager.register(iPad);
datamanager.addItem(iPhone);
datamanager.unregister(iPhone);

console.log(datamanager.getDataList());

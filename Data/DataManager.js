export const DataManager = (function() {
    function DataManager() {
        this.dataList = [];
    };
    // 여기도 get set으로 받아야하는지
    DataManager.prototype.register = function(item) {
        this.dataList.push({item : item, amount : 1});
    };
    DataManager.prototype.unregister = function(item) {
        this.dataList = this.dataList.filter((iName) => iName.item !== item);
    };
    DataManager.prototype.getDataList = function() {
        return this.dataList;
    };
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
    return DataManager;
})();

import { DataManager } from "../../Data/DataManager.js";

// 제품 삭제, 리스트 보여주기
export const Basket = (function() {
    function Basket() {
        this.datamanager = null
    }
    Basket.prototype.setManager = function (manager){
        this.datamanager = manager
    }
    // 데이터를 지워야 할 때 DB매니저의 unregister 함수를 호출
    Basket.prototype.deleteItem = function(item) {
        this.datamanager.unregister(item);
    };
    Basket.prototype.showList = function() {
        return this.datamanager.getDataList();
    }
    return Basket;
})();


import { DataManager } from "../../Data/DataManager.js";

// 제품 삭제, 리스트 보여주기 (둘 다 DB매니저랑 연결해서 DB매니저에서 기능하도록)
export const Basket = (function() {
    function Basket(item) {
        this.item = item;
    };
    // 데이터를 지워야 할 때 DB매니저의 unregister 함수를 호출함
    Basket.prototype.deleteItem = function(item) {
        item.unregister(this);
    };
    Basket.prototype.showList  = function() {
        return DataManager.prototype.getDataList(); // DataManager를 생성자로 받은 객체.getDataList로 호출해야 할 듯
    }
    return Basket;
})();


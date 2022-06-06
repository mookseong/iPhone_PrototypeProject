import { DataManager } from "../../Data/DataManager.js";
import { iPad_Pro_5_SpaceGray } from "../../Data/Product/iPad.js";
import { iPhone13 } from "../../Data/Product/iPhone.js";

// 제품 삭제, 리스트 보여주기
export const Basket = (function() {
    function Basket() {
    };
    // 데이터를 지워야 할 때 DB매니저의 unregister 함수를 호출
    Basket.prototype.deleteItem = function(item) {
        datamanager.unregister(item);
    };
    Basket.prototype.showList = function() {
        return datamanager.getDataList();
    }
    return Basket;
})();

// testcode
const basket = new Basket;
var datamanager = new DataManager;
datamanager.register(iPhone13);
datamanager.register(iPad_Pro_5_SpaceGray);
basket.showList();

basket.deleteItem(iPhone13);
basket.showList();



// 장바구니 기능 : 제품 삭제, 리스트 보여주기
// 제품 삭제 기능(deleteItem) 수행 시 DataManager의 unregister 함수를 호출
// 장바구니(Basket)에서 데이터 삭제를 요청하고 데이터에 접근해서 삭제하는 작업은 DataManager에게 위임
// 리스트 보여주기(showList) 수행 시 DataManager의 getDataList 함수를 호출하여 DataManager의 데이터를 불러옴
// 사용자의 직접 접근을 basket으로 제한하기 위함
export const Basket = (function() {
    function Basket() {
        this.datamanager = null
    }
    // 특정 제품을 장바구니에서 삭제하고자 할 때
    Basket.prototype.setManager = function (manager){
        this.datamanager = manager
    }
    // 데이터를 지워야 할 때 DB매니저의 unregister 함수를 호출
    Basket.prototype.deleteItem = function(item) {
        this.datamanager.unregister(item);
    };
    // 장바구니에 있는 모든 제품을 보고싶을 때
    Basket.prototype.showList = function() {
        return this.datamanager.getDataList();
    }
    return Basket;
})();


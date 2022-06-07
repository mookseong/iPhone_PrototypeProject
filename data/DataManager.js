// 제품 등록, 제품 삭제, 리스트 보여주기
// 데이터매니저 기능 : 제품 등록, 제품 삭제, 리스트 보여주기
// 제품 등록(register) 수행 시 DataManager에서 관리하는 데이터들을 모아놓은 배열(dataList)에 객체를 추가
// 제품 삭제(unregister) 수행 시 dataList에서 삭제하고자 하는 객체를 제거한 배열을 반환
// 리스트 보여주기(getDataList) : dataList의 모든 요소를 순회하며 출력해줌
export const DataManager = (function () {
    function DataManager() {
        this.dataList = [];
    }
    // 제품을 장바구니로 등록할 시 register를 사용하여 dataList에 등록함
    DataManager.prototype.register = function (item) {
        this.dataList.push(item);
    };
    // 장바구니에서 deleteItem이 실행되면 dataList에서 item을 찾아 항목을 삭제함
    DataManager.prototype.unregister = function (item) {
        this.dataList = this.dataList.filter((iName) => iName !== item);
        console.log("항목을 삭제했습니다.");
    };
    // 장바구니에서 showList가 실행되면 dataList를 출력해줌
    // 장바구니에서 deleteItem이 실행되면 dataList에서 item을 찾아 항목을 삭제함
    // basket.deleteItem(item) --> unregister(item)
    DataManager.prototype.getDataList = function () {
        this.dataList.forEach((item) => {
            try {
                console.log(item);
            } catch {
                console.log("장바구니에 물건이 없습니다.");
            }
        })
    }

    return DataManager;
}());



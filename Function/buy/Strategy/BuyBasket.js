export const BuyBasket= (function () {
    function BuyBasket() {
        this.ctoCommands = []; //실행옵션
    }

    BuyBasket.prototype.execute = function () {

    };
    BuyBasket.prototype.buy = function () {
        console.log("구매가 완료되었습니다.");
    };

    return BuyBasket;
})();
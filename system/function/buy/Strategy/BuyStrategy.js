export const BuyStrategy = (function () {
    function BuyOption() {
        this.strategy = null;
    }

    BuyOption.prototype.setStrategy = function (Strategy) {
        this.strategy = Strategy;
    };
    BuyOption.prototype.execute = function () {
        this.strategy.execute();
    };
    BuyOption.prototype.buy = function () {
        console.log("구매가 완료되었습니다.");
    };
    return BuyOption;
})();
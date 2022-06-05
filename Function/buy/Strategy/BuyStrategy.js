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
        this.strategy.buy();
    };
    return BuyOption;
})();
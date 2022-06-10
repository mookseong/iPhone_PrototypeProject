export const Strategy = (function () {
    function Strategy() {
        this.strategy = null;
    }

    Strategy.prototype.setStrategy = function (Strategy) {
        this.strategy = Strategy;
    };
    Strategy.prototype.execute = function () {
        this.strategy.execute();
    };
    return Strategy;
})();

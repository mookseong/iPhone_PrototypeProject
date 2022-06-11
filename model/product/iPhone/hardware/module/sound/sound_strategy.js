export const sound_strategy = (function () {
    function Strategy(state) {
        this.strategy = state;
    }

    Strategy.prototype.setStrategy = function (Strategy) {
        this.strategy = Strategy;
        this.play();
    };
    Strategy.prototype.play = function () {
        this.strategy.play();
    };

    return Strategy;
})();
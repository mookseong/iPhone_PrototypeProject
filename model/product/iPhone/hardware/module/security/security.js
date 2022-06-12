export const security = (function () {
    function Strategy(state) {
        this._strategy = state;
        this.securityInfo();
    }

    Strategy.prototype.register = function () {
        this._strategy.register();
    };
    Strategy.prototype.certify = function () {
        this._strategy.certify();
    };
    Strategy.prototype.securityInfo = function () {
        this._strategy.securityInfo()
    }

    return Strategy;
})();
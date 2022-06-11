export const security = (function () {
    function Strategy(state) {
        this.strategy = state;
        this.securityInfo();
    }

    Strategy.prototype.register = function () {
        this.strategy.register();
    };
    Strategy.prototype.certify = function () {
        this.strategy.certify();
    };
    Strategy.prototype.securityInfo = function (){
        this.strategy.securityInfo()
    }

    return Strategy;
})();
export const buyCommander = (function () {
    function BuySystem() {
        this.buycmmander =null

    }

    BuySystem.prototype.select = function () {
        this.buycmmander.executeOption();
    };

    BuySystem.prototype.buy = function () {
        this.buycmmander.buy();
    };

    return BuySystem;
})();
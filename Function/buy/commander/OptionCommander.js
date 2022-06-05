export const OptionCommander = (function () {
    function BuySystem() {
        this.buycmmander =null      // buycommander (?)

    }

    BuySystem.prototype.select = function () {
        this.buycmmander.executeOption();
    };

    BuySystem.prototype.buy = function () {
        this.buycmmander.buy();
    };

    return BuySystem;
})();
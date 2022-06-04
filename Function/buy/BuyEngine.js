export const buySystem = (function () {
    function BuySystem() {
        this.buycmmander =null

    }

    BuySystem.prototype.setCommands = function (commander) {
        this.buycmmander = commander
    };

    BuySystem.prototype.select = function () {
        this.buycmmander.executeOption();
    };

    BuySystem.prototype.buy = function () {
        this.buycmmander.buy();
    };

    return BuySystem;
})();

export const buyCommander = (function () {
    function ListSetup() {
        this.commands = [];
        this.selectoption = [];
    }

    ListSetup.prototype.buy = function () {
        console.log("(선택한 옵션 보여준다)");
        console.log("1.구매하기\t2.장바구니 추가");

    };

    ListSetup.prototype.executeOption = function () {
        this.commands.forEach(function (commander) {
            commander();
        });
    };

    ListSetup.prototype.option = function (commander, args) {
        this.commands.push(function () {
            commander.call(null, args);
        });
    };

    ListSetup.prototype.undo = function () {
        this.commands.splice(0, this.commands.length);
    };
    return ListSetup;
})();

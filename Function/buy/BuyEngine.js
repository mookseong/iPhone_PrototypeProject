

export const BuySystem = (function () {
    function BuySystem() {
    }

    BuySystem.prototype.select = function (context) {
        context.execute();
    };

    BuySystem.prototype.buy = function (context) {
        context.buy();
    }

    return BuySystem;
})();

export const BuyContext = (function () {
    function ListSetup() {
        this.BuyContext = null
        this.commands = [];

    }

    ListSetup.prototype.buy = function () {
        console.log("(선택한 옵션 보여준다)")
        console.log("1.구매하기\t2.장바구니 추가")

    };

    ListSetup.prototype.execute = function () {
        this.commands.forEach(function (context) {
            context();

        });
    };

    ListSetup.prototype.option = function (context, args) {
        this.commands.push(function () {
            context.call(null, args);
        });
    };

    ListSetup.prototype.undo = function () {
        this.commands.splice(0, this.commands.length);
    };
    return ListSetup;
})();

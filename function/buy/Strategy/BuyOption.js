export const BuyOption = (function () {
    function BuyList() {
        this.ctoCommands = []; //실행옵션
        this.ctoOption = []; //사용자가 선택한 옵션
    }

    BuyList.prototype.execute = function () {
        let tempCTO = [];
        this.ctoCommands.forEach(function (commands, index) {
            commands();
            tempCTO.push(index); //사용자 입력 데이터 입력
        });
        this.ctoOption = tempCTO;
    };
    BuyList.prototype.option = function (commands, args) {
        this.ctoCommands.push(function () {
            commands.call(null, args);
        });
    };
    BuyList.prototype.undo = function () {
        this.ctoCommands.splice(0, this.ctoCommands.length);
    };

    return BuyList;
})();
/*
 * BuyOption 기능은 commander 기능을 옵션을 추가하여 작동이 된다.
 * 객체를 통해 BuyList.prototype.option 실행하여 옵션 객체들을 추가하고
 * BuyList.prototype.execute 통해 추가했던 옵션을 실행하여 순차적으로 작동이 된다.
 */

export const BuyOption = (function () {
    function BuyList() {
        this.ctoCommands = []; //실행옵션
        this.ctoOption = []; //사용자가 선택한 옵션
    }
    //추가된 ctoCommands 실행한다.
    BuyList.prototype.execute = function () {
        let tempCTO = [];
        this.ctoCommands.forEach(function (commands, index) {
            commands();
            tempCTO.push(index); //사용자 입력 데이터 입력
        });
        this.ctoOption = tempCTO;
    };
    //실행할 옵션을 추가한다.
    BuyList.prototype.option = function (commands, args) {
        this.ctoCommands.push(function () {
            commands.call(null, args);
        });
    };
    //객체가 재활용될 수있기 때문에 옵션을 초기화 할 수있는 기능을 추가했다.
    BuyList.prototype.reset = function () {
        this.ctoCommands.splice(0, this.ctoCommands.length);
    };

    return BuyList;
})();
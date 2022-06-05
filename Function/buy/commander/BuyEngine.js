export const buy = (function () {
    function ListSetup() {      // ListSetUp (?)
        this.commander =null
        this.commandsOption = [];
        this.selectoption = []; //selectOption(?)
    }

    ListSetup.prototype.setCommander = function (commander) {
        this.commander = commander
    };

    ListSetup.prototype.executeOption = function () {
        this.commandsOption.forEach(function (commander) {
            commander();
        });
    };

    ListSetup.prototype.option = function (commander, args) {
        this.commandsOption.push(function () {
            commander.call(null, args);
        });
    };

    ListSetup.prototype.undo = function () {
        this.commandsOption.splice(0, this.commandsOption.length);
        this.selectoption.splice(0, this.selectoption.length);
    };


    return ListSetup;
})();

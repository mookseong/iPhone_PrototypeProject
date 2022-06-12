export const alarm = (function () {
    function Alarm() {
        this._info = '[알람]';
    }

    Alarm.prototype.startApp = function () {
        console.log("[알람]를 실행합니다.");
    };
    Alarm.prototype.infoApp = function () {
        return this._info;
    };

    return Alarm;
})();
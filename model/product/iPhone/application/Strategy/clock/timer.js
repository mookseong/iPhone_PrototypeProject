export const timer = (function () {
    function Timer() {
        this.info = '[타이머]';
    }

    Timer.prototype.startApp = function () {
        console.log("[타이머]를 실행합니다.");
    };
    Timer.prototype.infoApp = function () {
        return this.info;
    };
    return Timer;
})();

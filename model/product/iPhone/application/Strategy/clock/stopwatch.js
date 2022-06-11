export const stopwatch = (function () {
    function StopWatch() {
        this.info = '[스탑워치]';
    }

    StopWatch.prototype.startApp = function () {
        console.log("[스탑워치]를 실행합니다.");
    };
    StopWatch.prototype.infoApp = function () {
        return this.info;
    };
    return StopWatch;
})();

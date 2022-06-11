export const alarm = (function() {
    function Alarm() {
        this.info = '[알람]';
    }
    Alarm.prototype.startApp = function () {
        console.log("[알람]를 실행합니다.");
    };
    Alarm.prototype.infoApp = function() {
        return this.info;
    };
    return Alarm;
})();


export const stopwatch = (function() {
    function StopWatch() {
        this.info = '[스탑워치]';
    }
    StopWatch.prototype.startApp = function () {
        console.log("[스탑워치]를 실행합니다.");
    };
    StopWatch.prototype.infoApp = function() {
        return this.info;
    };
    return StopWatch;
})();


export const timer = (function() {
    function Timer() {
        this.info = '[타이머]';
    }
    Timer.prototype.startApp = function () {
        console.log("[타이머]를 실행합니다.");
    };
    Timer.prototype.infoApp = function() {
        return this.info;
    };
    return Timer;
})();

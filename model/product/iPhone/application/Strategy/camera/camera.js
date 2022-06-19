export const camera = (function () {
    function Camera(strategy) {
        this._info = "[카메라]";
    };
    Camera.prototype.setStrategy = function(strategy) {
        this._strategy = strategy;
    };
    Camera.prototype.shot = function () {
        this._strategy.shot();
    };
    Camera.prototype.startApp = function () {
        console.log("[카메라]를 실행합니다.");
        this.shot();
    };
    Camera.prototype.infoApp = function () {
        return this._info;
    };

    return Camera;
})();

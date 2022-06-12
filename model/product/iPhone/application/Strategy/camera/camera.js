import {closeupStrategy} from "./closeupStrategy.js";
import {panoramaStrategy} from "./panoramaStrategy.js";
import {videoStrategy} from "./videoStrategy.js";
import {normalStrategy} from "./normalStrategy.js";

export const cameraStrategy = (function () {
    function CameraStrategy(strategy) {
        this._info = "[카메라]";
        this._strategy = strategy;
    }

    CameraStrategy.prototype.setCloseUp = function () {
        this._strategy = new closeupStrategy();
    };
    CameraStrategy.prototype.setPanorama = function () {
        this._strategy = new panoramaStrategy();
    };
    CameraStrategy.prototype.setVideo = function () {
        this._strategy = new videoStrategy();
    };
    CameraStrategy.prototype.setNormal = function () {
        this._strategy = new normalStrategy();
    };
    CameraStrategy.prototype.execute = function () {
        this._strategy.execute();
    };
    CameraStrategy.prototype.startApp = function () {
        console.log("[카메라]를 실행합니다.");
        this.execute();
    };
    CameraStrategy.prototype.infoApp = function () {
        return this._info;
    };

    return CameraStrategy;
})();
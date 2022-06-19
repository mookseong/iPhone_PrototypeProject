import {browser} from "./Strategy/browser.js";
import {calender} from "./Strategy/calender.js";
import {call} from "./Strategy/call/call.js";
import {gallery} from "./Strategy/gallery.js";
import {memo} from "./Strategy/memo.js";
import {normalCamera} from "./Strategy/camera/normalStrategy.js";
import {camera} from "./Strategy/camera/camera.js";
import {alarm} from "./Strategy/clock/alarm.js";
import {stopwatch} from "./Strategy/clock/stopwatch.js";
import {timer} from "./Strategy/clock/timer.js";

const commander = (function () {     // appSwitcher
    function Commander() {
        this._runApp = null;
        this._stayApp = [];
    }

    Commander.prototype.setApp = function (strategy) {
        if (this._runApp != null) this._stayApp.push(this._runApp);
        this._runApp = strategy;
        this.startApp();
    };
    Commander.prototype.startApp = function () {
        this._runApp.startApp();
    };
    Commander.prototype.infoMultiTask = function () {
        if (this._runApp != null) {
            console.log("현재 실행 중인 프로그램 : " + this._runApp.infoApp());
        } else if (this._runApp == null) {
            console.log("현재 실행 중인 프로그램 : [없음]");
        }
        this._stayApp.forEach(function (commander) {
            console.log("대기 중인 프로그램 : " + commander.infoApp());
        });
    };
    Commander.prototype.closeStayApp = function () {
        this._stayApp.pop();
    };
    Commander.prototype.closeRunApp = function () {
        this._runApp = null;
    };

    return Commander;
})();

export const home = (function () {
    function Home() {
        this._commander = new commander();
    }

    Home.prototype.startMultiTask = function () {
        this._commander.infoMultiTask();
    };
    Home.prototype.stopRunApp = function () {
        this._commander.closeRunApp();
    };
    Home.prototype.stopStayApp = function () {
        this._commander.closeStayApp();
    };
    Home.prototype.openCamera = function () {
        this._commander.setApp(new camera(new normalCamera()))
    };
    Home.prototype.openBrowser = function () {
        this._commander.setApp(new browser());
    };
    Home.prototype.openCalender = function () {
        this._commander.setApp(new calender());
    };
    Home.prototype.openCall = function () {
        this._commander.setApp(new call());
    };
    Home.prototype.openAlarm = function () {
        this._commander.setApp(new alarm());
    };
    Home.prototype.openStopwatch = function () {
        this._commander.setApp(new stopwatch());
    };
    Home.prototype.openTimer = function () {
        this._commander.setApp(new timer());
    };
    Home.prototype.openGallery = function () {
        this._commander.setApp(new gallery());
    };
    Home.prototype.openMemo = function () {
        this._commander.setApp(new memo());
    };

    return Home;
})();
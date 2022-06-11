import { Browser } from "./Strategy/Browser.js";
import { Calender } from "./Strategy/Calender.js";
import { Call } from "./Strategy/Call.js";
import { CameraStrategy } from "./Strategy/Camera.js";
import { Alarm, StopWatch, Timer } from "./Strategy/Clock.js";
import { Gallery } from "./Strategy/Gallery.js";
import { Note } from "./Strategy/Notes.js";

export const home = (function () {     // appSwitcher
    function Commander() {
        this.runApp = null;
        this.stayApp = [];
    }
    Commander.prototype.setApp = function (strategy) {
        if (this.runApp != null)
            this.stayApp.push(this.runApp);
        this.runApp = strategy;
    };
    Commander.prototype.startApp = function () {
        this.runApp.startApp();
    };
    Commander.prototype.infoMultitask = function () {
        console.log("현재 실행중인 프로그램 : " + this.runApp.infoApp());
        this.stayApp.forEach( function (commander) {
            console.log("대기중인 프로그램 : " + commander.infoApp());
        })
    };
    Commander.prototype.closeStayApp = function () {
        this.stayApp.pop();
    };
    Commander.prototype.closeRunApp = function () {
        this.runApp = null;
    };

    return Commander;
})();

const appSwitcher = new home();


appSwitcher.setApp(new Browser())
appSwitcher.startApp();

appSwitcher.setApp(new Calender())
appSwitcher.startApp();

appSwitcher.infoMultitask()

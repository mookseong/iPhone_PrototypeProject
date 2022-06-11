import { browser } from "./Strategy/Browser.js";
import { calender } from "./Strategy/Calender.js";
import { call } from "./Strategy/Call.js";
import { cameraCloseUpStrategy, cameraNormalStrategy, cameraPanoramaStrategy, cameraStrategy, cameraVideoStrategy } from "./Strategy/Camera.js";
import { alarm, stopwatch, timer } from "./Strategy/Clock.js";
import { gallery } from "./Strategy/Gallery.js";
import { memo } from "./Strategy/Memo.js";

export const commander = (function () {     // appSwitcher
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
    Commander.prototype.infoMultiTask = function () {
        if (this.runApp != null) {
            console.log("현재 실행중인 프로그램 : " + this.runApp.infoApp());
        }
        else if (this.runApp == null) {
            console.log("현재 실행중인 프로그램 : [없음]");
        }
        this.stayApp.forEach( function (commander) {
            console.log("대기중인 프로그램 : " + commander.infoApp());
        });
    };
    Commander.prototype.closeStayApp = function () {
        this.stayApp.pop();
    };
    Commander.prototype.closeRunApp = function () {
        this.runApp = null;
    };

    return Commander;
})();

export const home = (function() {
    function Home() {
        this.commander = new commander();
        this.browser = new browser();
        this.calender = new calender();
        this.call = new call();
        this.camera = new cameraStrategy();
        this.normalCamera = new cameraNormalStrategy()
        this.closeUpCamera = new cameraCloseUpStrategy();
        this.panoramaCamera = new cameraPanoramaStrategy();
        this.videoCamera = new cameraVideoStrategy();
        this.alarm = new alarm();
        this.stopwatch = new stopwatch();
        this.timer = new timer();
        this.gallery = new gallery();
        this.memo = new memo();
    };
    Home.prototype.startMultiTask = function() {
        this.commander.infoMultiTask();
    };
    Home.prototype.shutDownRunApp = function() {
        this.commander.closeRunApp();
    };
    Home.prototype.shutDownStayApp = function() {
        this.commander.closeStayApp();
    }
    Home.prototype.openBrowser = function() {
        this.commander.setApp(this.browser);
        this.commander.startApp();
    };
    Home.prototype.openCalender = function() {
        this.commander.setApp(this.calender);
        this.commander.startApp();
    };
    Home.prototype.openCall = function() {
        this.commander.setApp(this.call);
        this.commander.startApp();
    };
    Home.prototype.openCamera = function() {
        this.commander.setApp(this.camera);
        this.commander.startApp();
    };
    Home.prototype.changeNormalCamera = function() {
        this.camera.setStrategy(this.normalCamera);
        this.camera.execute();
    };
    Home.prototype.changeCloseUpCamera = function() {
        this.camera.setStrategy(this.closeUpCamera);
        this.camera.execute();
    };
    Home.prototype.changePanoramaCamera = function() {
        this.camera.setStrategy(this.panoramaCamera);
        this.camera.execute();
    };
    Home.prototype.changeVideoCamera = function() {
        this.camera.setStrategy(this.videoCamera);
        this.camera.execute();
    };
    Home.prototype.openAlarm = function() {
        this.commander.setApp(this.alarm);
        this.commander.startApp();
    }
    Home.prototype.openStopwatch = function() {
        this.commander.setApp(this.stopwatch);
        this.commander.startApp();
    }
    Home.prototype.openTimer = function() {
        this.commander.setApp(this.timer);
        this.commander.startApp();
    }
    Home.prototype.openGallery = function() {
        this.commander.setApp(this.gallery);
        this.commander.startApp();
    }
    Home.prototype.openMemo = function() {
        this.commander.setApp(this.memo);
        this.commander.startApp();
    }
    return Home;
})();

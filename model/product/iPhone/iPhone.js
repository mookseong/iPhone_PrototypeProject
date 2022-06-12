import {setting} from "./hardware/setting.js";
import {iModel, PerformanceModel} from "../../DataModel.js";
import {home} from "./application/home.js";

const iPhone = (function () {
    function Phone() {
        this._home = new home();
        this._setting = new setting();
        this._observer = null;
        this._info = null;
        this.init();
    }

    Phone.prototype.init = function () {
        this._info = new iModel('iPhone13')
            .setModel('A2378')
            .setColor('Silver')
            .setPerformance(new PerformanceModel()
                .setCPU('A15')
                .setRAM('6G')
                .setScreenSize(6.1)
                .setStorage(128)
                .build())
            .setGeneration(13)
            .build();

        this._observer = this._setting.getBatteryObserver();
        this._observer.subscribe({
            notify: (change) => console.log(`배터리가 부족합니다\n 배터리는 ${change}% 입니다.`)
        });
    };
    // application
    Phone.prototype.multiTask = function () {
        console.log("\n----작업 관리자 ----");
        this._home.startMultiTask();
    };
    Phone.prototype.runOff = function () {
        this._home.stopRunApp();
        console.log("\n실행중인 프로그램을 종료하였습니다.");
    };
    Phone.prototype.stayOff = function () {
        this._home.stopStayApp();
        console.log("\n----작업 관리자 ----");
        this._home.startMultiTask();
    }
    Phone.prototype.executeBrowser = function () {
        this._home.openBrowser();
    };
    Phone.prototype.executeCalender = function () {
        this._home.openCalender();
    };
    Phone.prototype.executeCamera = function () {
        this._home.openCamera();
    }
    Phone.prototype.executeCall = function () {
        this._home.openCall();
    };
    Phone.prototype.executeAlarm = function () {
        this._home.openAlarm();
    };
    Phone.prototype.executeStopwatch = function () {
        this._home.openStopwatch();
    };
    Phone.prototype.executeTimer = function () {
        this._home.openTimer();
    };
    Phone.prototype.executeGallery = function () {
        this._home.openGallery();
    };
    Phone.prototype.executeMemo = function () {
        this._home.openMemo();
    };
    // setting
    Phone.prototype.AirplaneMode = function () {
        console.log("비행기모드를 킵니다.")
        this._setting.stopServiceAll();
    };
    Phone.prototype.unAirplaneMode = function () {
        console.log("비행기모드를 해제합니다.")
        this._setting.startService();
    };
    Phone.prototype.wifi = function (set) {
        this._setting.stateWifi(set);
    };
    Phone.prototype.screen = function (set) {
        this._setting.stateScreen(set);
    };
    Phone.prototype.bluetooth = function (set) {
        this._setting.stateBluetooth(set);
    };
    Phone.prototype.setSound = function (set) {
        this._setting.setSound(set);
    };
    Phone.prototype.getBattery = function () {
        this._setting.getBattery();
    };
    Phone.prototype.getInfo = function () {
        console.log("모델명 : " + this._info.Name + ",\n" + "색상 : " + this._info.Color + ",\n" + "세대 : " + this._info.Generation);
        this._setting.getBattery();
    };
    Phone.prototype.playSound = function () {
        this._setting.stateSound();
    };
    Phone.prototype.setSecurity = function () {
        this._setting.setSecurity();
    };

    return Phone;
})();

const iPhone13 = new iPhone();
// iPhone13.wifi(false);
// iPhone13.wifi(false);
// iPhone13.bluetooth(true);
// iPhone13.getBattery();
// iPhone13.getInfo();
// iPhone13.playSound();
// iPhone13.AirplaneMode();

//
// iPhone13.executeAlarm();
// iPhone13.executeBrowser();
// iPhone13.executeGallery();
// iPhone13.executeCall();
// iPhone13.multiTask();
// iPhone13.executeCamera();
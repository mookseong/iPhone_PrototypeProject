import {setting} from "./hardware/setting.js";
import {iModel, PerformanceModel} from "../../DataModel.js";
import {home} from "./application/home.js";

const iPhone = (function () {
    function Phone() {
        this.home = new home();
        this.setting = new setting();
        this.observer = null;
        this.info = null;
        this.init();
    }

    Phone.prototype.init = function () {
        this.info = new iModel('iPhone13')
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

        this.observer = this.setting.getBatteryObserver();
        this.observer.subscribe({
            notify: (change) => console.log(`배터리가 부족합니다\n 배터리는 ${change}% 입니다.`)
        });
    };
    // application
    Phone.prototype.multiTask = function () {
        console.log("\n----작업 관리자 ----");
        this.home.startMultiTask();
    };
    Phone.prototype.runOff = function () {
        this.home.stopRunApp();
        console.log("\n실행중인 프로그램을 종료하였습니다.");
    };
    Phone.prototype.stayOff = function () {
        this.home.stopStayApp();
        console.log("\n----작업 관리자 ----");
        this.home.startMultiTask();
    }
    Phone.prototype.executeBrowser = function () {
        this.home.openBrowser();
    };
    Phone.prototype.executeCalender = function () {
        this.home.openCalender();
    };
    Phone.prototype.executeCamera = function () {
        this.home.openCamera();
    }
    Phone.prototype.executeCall = function () {
        this.home.openCall();
    };
    Phone.prototype.executeAlarm = function () {
        this.home.openAlarm();
    };
    Phone.prototype.executeStopwatch = function () {
        this.home.openStopwatch();
    };
    Phone.prototype.executeTimer = function () {
        this.home.openTimer();
    };
    Phone.prototype.executeGallery = function () {
        this.home.openGallery();
    };
    Phone.prototype.executeMemo = function () {
        this.home.openMemo();
    };
    //setting
    Phone.prototype.AirplaneMode = function () {
        console.log("비행기모드를 킵니다.")
        this.setting.stopServiceAll();
    };
    Phone.prototype.unAirplaneMode = function () {
        console.log("비행기모드를 해제합니다.")
        this.setting.startService();
    };
    Phone.prototype.wifi = function (set) {
        this.setting.stateWifi(set);
    };
    Phone.prototype.screen = function (set) {
        this.setting.stateScreen(set);
    };
    Phone.prototype.bluetooth = function (set) {
        this.setting.stateBluetooth(set);
    };
    Phone.prototype.setSound = function (set) {
        this.setting.setSound(set);
    };
    Phone.prototype.getBattery = function () {
        this.setting.getBattery();
    };
    Phone.prototype.getInfo = function () {
        console.log("모델명 : " + this.info.Name + ",\n" + "색상 : " + this.info.Color + ",\n" + "세대 : " + this.info.Generation);
        this.setting.getBattery();
    };
    Phone.prototype.playSound = function () {
        this.setting.stateSound();
    };
    Phone.prototype.setSecurity = function () {
        this.setting.setSecurity();
    };

    return Phone;
})();

const iPhone13 = new iPhone();
iPhone13.wifi(false);
iPhone13.wifi(false);
iPhone13.bluetooth(true);
iPhone13.getBattery();
iPhone13.getInfo();
iPhone13.playSound();
iPhone13.AirplaneMode();


iPhone13.executeAlarm();
iPhone13.executeBrowser();
iPhone13.executeGallery();
iPhone13.executeCall();
iPhone13.multiTask();
iPhone13.executeCamera();
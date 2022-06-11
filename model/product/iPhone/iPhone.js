import {setting} from "./hardware/setting.js";
import {iModel, PerformanceModel} from "../../DataModel.js";
import { home } from "./application/Home.js";

const iPhone = (function () {
    function Phone() {
        this.home = new home();
        this.setting = new setting();
        this.observer = null;
        this.info = null;
        this.init();
    }
    // application
    Phone.prototype.multiTask = function() {
        console.log("\n----작업 관리자 ----");
        this.home.startMultiTask();
    };
    Phone.prototype.runOff = function() {
        this.home.shutDownRunApp();
        console.log("\n실행중인 프로그램을 종료하였습니다.");
    };
    Phone.prototype.stayOff = function() {
        this.home.shutDownStayApp();
        console.log("\n----작업 관리자 ----");
        this.home.startMultiTask();
    }
    Phone.prototype.executeBrowser = function() {
        console.log("");
        this.home.openBrowser();
    };
    Phone.prototype.executeCalender = function() {
        console.log("");
        this.home.openCalender();
    };
    Phone.prototype.executeCall = function() {
        console.log("");
        this.home.openCall();
    };
    Phone.prototype.executeCamera = function() {
        console.log("");
        this.home.openCamera();
    };
    Phone.prototype.normalMode = function() {
        this.home.changeNormalCamera();
    };
    Phone.prototype.closeUpMode = function() {
        this.home.changeCloseUpCamera();
    };
    Phone.prototype.panoramaMode = function() {
        this.home.changePanoramaCamera();
    };
    Phone.prototype.videoMode = function() {
        this.home.changeVideoCamera();
    };
    Phone.prototype.executeAlarm = function() {
        console.log("");
        this.home.openAlarm();
    };
    Phone.prototype.executeStopwatch = function() {
        console.log("");
        this.home.openStopwatch();
    };
    Phone.prototype.executeTimer = function() {
        console.log("");
        this.home.openTimer();
    };
    Phone.prototype.executeGallery = function() {
        console.log("");
        this.home.openGallery();
    };
    Phone.prototype.executeMemo = function() {
        console.log("");
        this.home.openMemo();
    };


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
// iPhone13.wifi(false);
// iPhone13.wifi(false);
// iPhone13.bluetooth(true);
// iPhone13.getBattery();
// iPhone13.getInfo();
// iPhone13.playSound();
// iPhone13.AirplaneMode();


// iPhone13.executeAlarm();
// iPhone13.executeBrowser();
// iPhone13.executeGallery();
// iPhone13.executeCamera();
// iPhone13.closeUpMode();
// iPhone13.executeCall();
// iPhone13.multiTask();

// iPhone13.runOff();
// iPhone13.stayOff();

// iPhone13.executeCalender();
// iPhone13.multiTask();
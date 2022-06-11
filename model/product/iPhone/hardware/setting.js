import {battery, batterySubject} from "./module/battery/battery.js";
import {wifi} from "./module/wifi/wifi.js";
import {bluetooth} from "./module/bluetooth/bluetooth.js";
import {screen} from "./module/srcreen/screen.js";
import {sound_strategy} from "./module/sound/sound_strategy.js";

export const setting = (function () {
    function Setting() {
        this.batteryObserver = new batterySubject()
        this.battery = new battery(this.batteryObserver);
        this.wifi = new wifi();
        this.bluetooth = new bluetooth();
        this.screen = new screen();
        this.screenService = false;
        this.sound = new sound_strategy();
        this.security = null;
        this.startService();
    }

    Setting.prototype.setSecurity = function (security) {
        this.security = security;
        this.startService();
    };
    Setting.prototype.startService = function () {
        this.bluetooth.startBluetooth();
        this.wifi.startWifi();
        this.sound.setStrategy("소리")
    };
    Setting.prototype.stopServiceAll = function () {
        this.bluetooth.stopBluetooth();
        this.wifi.stopWifi();
        this.sound.setStrategy("무음")
    };
    Setting.prototype.stateWifi = function (state) {
        if (state) this.wifi.startWifi(); else this.wifi.stopWifi();
    };
    Setting.prototype.stateScreen = function (state) {
        if (state) this.screen.startScreen(); else this.screen.stopScreen();
    };
    Setting.prototype.stateBluetooth = function (state) {
        if (state) this.bluetooth.startBluetooth(); else this.bluetooth.stopBluetooth();
    };
    Setting.prototype.stateSound = function () {
        this.sound.play();
    };
    Setting.prototype.setSound = function (state) {
        this.sound.setStrategy(state);
    };
    Setting.prototype.setSecurity = function () {
        this.security.register();
    };
    Setting.prototype.Screen = function () {
        if (!this.screenService) {
            this.screen.startScreen();
            this.screenService = true;
        } else {
            this.screen.stopScreen();
            this.screenService = false;
        }
    };
    Setting.prototype.getBattery = function () {
        console.log(`배터리상태는 ${this.battery.getState()}% 입니다.`)
    };
    Setting.prototype.getBatteryObserver = function () {
        return this.batteryObserver;
    };

    return Setting
})();


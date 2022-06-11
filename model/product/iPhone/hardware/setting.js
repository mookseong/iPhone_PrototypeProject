import {battery, batterySubject} from "./module/battery/battery.js";
import {wifi} from "./module/wifi/wifi.js";
import {bluetooth} from "./module/bluetooth/bluetooth.js";
import {screen} from "./module/srcreen/screen.js";
import {sound_strategy} from "./module/sound/sound_strategy.js";
import {faceId} from "./module/security/faceId.js";
import {security} from "./module/security/security.js";

export const setting = (function () {
    function Setting() {
        this._batteryObserver = new batterySubject()
        this._battery = new battery(this._batteryObserver);
        this._wifi = new wifi();
        this._bluetooth = new bluetooth();
        this._screen = new screen();
        this._screenService = false;
        this._sound = new sound_strategy();
        this._security = new security(new faceId());
        this.startService();
    }

    Setting.prototype.startService = function () {
        this._bluetooth.startBluetooth();
        this._wifi.startWifi();
        this._sound.setStrategy("소리")
    };
    Setting.prototype.stopServiceAll = function () {
        this._bluetooth.stopBluetooth();
        this._wifi.stopWifi();
        this._sound.setStrategy("무음")
    };
    Setting.prototype.stateWifi = function (state) {
        if (state) this._wifi.startWifi(); else this._wifi.stopWifi();
    };
    Setting.prototype.stateScreen = function (state) {
        if (state) this._screen.startScreen(); else this._screen.stopScreen();
    };
    Setting.prototype.stateBluetooth = function (state) {
        if (state) this._bluetooth.startBluetooth(); else this._bluetooth.stopBluetooth();
    };
    Setting.prototype.stateSound = function () {
        this._sound.play();
    };
    Setting.prototype.setSound = function (state) {
        this._sound.setStrategy(state);
    };
    Setting.prototype.setSecurity = function () {
        this._security.register();
    };
    Setting.prototype.Screen = function () {
        if (!this._screenService) {
            this._screen.startScreen();
            this._screenService = true;
        } else {
            this._screen.stopScreen();
            this._screenService = false;
        }
    };
    Setting.prototype.getBattery = function () {
        console.log(`배터리상태는 ${this._battery.getState()}% 입니다.`)
    };
    Setting.prototype.getBatteryObserver = function () {
        return this._batteryObserver;
    };

    return Setting
})();


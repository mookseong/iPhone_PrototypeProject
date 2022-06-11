import {wifiOff} from "./wifiOff.js";

export const wifi = (function () {
    function Wifi() {
        this._wifi = new wifiOff();
    }

    Wifi.prototype.setState = function (state) {
        this._wifi = state;
    };
    Wifi.prototype.startWifi = function () {
        this._wifi.startWifi(this);
    };
    Wifi.prototype.stopWifi = function () {
        this._wifi.stopWifi(this);
    };

    return Wifi;
})();

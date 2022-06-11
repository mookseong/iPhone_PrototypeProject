import {wifiOff} from "./wifiOff.js";

export const wifi = (function () {
    function Wifi() {
        this.wifi = new wifiOff();
    }

    Wifi.prototype.setState = function (state) {
        this.wifi = state;
    };
    Wifi.prototype.startWifi = function () {
        this.wifi.startWifi(this);
    };
    Wifi.prototype.stopWifi = function () {
        this.wifi.stopWifi(this);
    };

    return Wifi;
})();

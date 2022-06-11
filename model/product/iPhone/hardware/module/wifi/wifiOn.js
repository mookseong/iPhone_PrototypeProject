import {wifiOff} from "./wifiOff.js";

export const wifiOn = (function () {
    function Wifi() {
    }

    Wifi.prototype.startWifi = function () {
        console.log("이미 wifi 이미 켜져있습니다.")
    };
    Wifi.prototype.stopWifi = function (state) {
        console.log("wifi 비활성화를 합니다.")
        state.setState(new wifiOff())
    };

    return Wifi;
})();
import {wifiOn} from "./wifiOn.js";

export const wifiOff= (function () {
    function Wifi() {
    }

    Wifi.prototype.startWifi = function (state) {
        console.log("wifi 활성화합니다.")
        state.setState(new wifiOn())
    };
    Wifi.prototype.stopWifi = function () {
        console.log("이미 wifi 가 꺼져있습니다.")
    };

    return Wifi;
})();


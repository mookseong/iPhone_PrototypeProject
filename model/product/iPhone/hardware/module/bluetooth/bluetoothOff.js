import {bluetoothOn} from "./bluetoothOn.js";

export const bluetoothOff = (function () {
    function Bluetooth() {
    }

    Bluetooth.prototype.startBluetooth = function (state) {
        console.log("bluetooth 활성화합니다.")
        state.setState(new bluetoothOn())
    };
    Bluetooth.prototype.stopBluetooth = function () {
        console.log("이미 bluetooth 가 꺼져있습니다.")
    };

    return Bluetooth;
})();


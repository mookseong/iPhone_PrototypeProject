import {bluetoothOff} from "./bluetoothOff.js";

export const bluetoothOn = (function () {
    function Bluetooth() {
    }

    Bluetooth.prototype.startBluetooth = function () {
        console.log("이미 bluetooth 켜져있습니다.")
    };
    Bluetooth.prototype.stopBluetooth = function (state) {
        console.log("bluetooth 비활성화를 합니다.")
        state.setState(new bluetoothOff())
    };

    return Bluetooth;
})();
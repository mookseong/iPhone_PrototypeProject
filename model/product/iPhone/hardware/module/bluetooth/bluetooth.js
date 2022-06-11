import {bluetoothOff} from "./bluetoothOff.js";

export const bluetooth = (function () {
    function Bluetooth() {
        this.bluetooth = new bluetoothOff();
    }

    Bluetooth.prototype.setState = function (state) {
        this.bluetooth = state;
    };
    Bluetooth.prototype.startBluetooth = function () {
        this.bluetooth.startBluetooth(this);
    };
    Bluetooth.prototype.stopBluetooth = function () {
        this.bluetooth.stopBluetooth(this);
    };

    return Bluetooth;
})();

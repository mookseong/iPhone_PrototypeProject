import {bluetoothOff} from "./bluetoothOff.js";

export const bluetooth = (function () {
    function Bluetooth() {
        this._bluetooth = new bluetoothOff();
    }

    Bluetooth.prototype.setState = function (state) {
        this._bluetooth = state;
    };
    Bluetooth.prototype.startBluetooth = function () {
        this._bluetooth.startBluetooth(this);
    };
    Bluetooth.prototype.stopBluetooth = function () {
        this._bluetooth.stopBluetooth(this);
    };

    return Bluetooth;

})();

export const WifiOn = (function () {
    function Wifi() {
    }

    Wifi.prototype.execute = function () {
        console.log("WIFI 켜짐")
    };

    return Wifi;
})();
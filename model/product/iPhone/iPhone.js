import {setting} from "./hardware/setting.js";

const iPhone = (function () {
    function Phone() {
        this.setting = new setting();
    }

    Phone.prototype.start = function () {

    };
    Phone.prototype.component = function () {

    };

    return Phone;
})();
const iPhone1 = new iPhone()

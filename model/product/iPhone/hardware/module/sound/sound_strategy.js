import {mute} from "./mute.js";
import {volume} from "./volume.js";
import {vibration} from "./vibration.js";

export const sound_strategy = (function () {
    function Strategy() {
        this._strategy = null;
    }

    Strategy.prototype.setStrategy = function (state) {
        switch (state) {
            case "무음":
                this._strategy = new mute();
                break;
            case "소리":
                this._strategy = new volume();
                break;
            case "진동":
                this._strategy = new vibration();
                break;
            default:
                console.log("잘못된 값이 들어왔습니다.")
        }
        this.play();
    };
    Strategy.prototype.play = function () {
        this._strategy.play();
    };

    return Strategy;
})();
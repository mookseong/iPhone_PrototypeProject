import {mute} from "./mute.js";
import {volume} from "./volume.js";
import {vibration} from "./vibration.js";

export const sound_strategy = (function () {
    function Strategy() {
        this.strategy = null;
    }

    Strategy.prototype.setStrategy = function (state) {
        switch (state) {
            case "무음":
                this.strategy = new mute();
                break;
            case "소리":
                this.strategy = new volume();
                break;
            case "진동":
                this.strategy = new vibration();
                break;
            default:
                console.log("잘못된 값이 들어왔습니다.")
        }
        this.play();
    };
    Strategy.prototype.play = function () {
        this.strategy.play();
    };

    return Strategy;
})();
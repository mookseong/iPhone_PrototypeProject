import {screenOff} from "./screenOff.js";

export const screenOn = (function () {
    function Screen() {
    }

    Screen.prototype.startScreen = function () {
        console.log("이미 화면을 켜져있습니다.")
    };
    Screen.prototype.stopScreen = function (state) {
        console.log("화면을 Off 합니다.")
        state.setState(new screenOff())
    };

    return Screen;
})();


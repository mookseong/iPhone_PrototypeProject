import {screenOn} from "./screenOn.js";

export const screenOff = (function () {
    function Screen() {
    }

    Screen.prototype.startScreen = function (state) {
        console.log("화면을 켭니다.")
        state.setState(new screenOn())
    };
    Screen.prototype.stopScreen = function () {
        console.log("화면은 이미 꺼져있습니다.")
    };

    return Screen;
})();

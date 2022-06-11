import {screenOff} from "./screenOff.js";

export const screen = (function () {
    function Screen() {
        this.screen = new screenOff();
    }

    Screen.prototype.setState = function (state) {
        this.screen = state;
    };
    Screen.prototype.startScreen = function () {
        this.screen.startScreen(this);
    };
    Screen.prototype.stopScreen = function () {
        this.screen.stopScreen(this);
    };

    return Screen;
})();

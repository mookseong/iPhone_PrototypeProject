import {screenOff} from "./screenOff.js";

export const screen = (function () {
    function Screen() {
        this._screen = new screenOff();
    }

    Screen.prototype.setState = function (state) {
        this._screen = state;
    };
    Screen.prototype.startScreen = function () {
        this._screen.startScreen(this);
    };
    Screen.prototype.stopScreen = function () {
        this._screen.stopScreen(this);
    };

    return Screen;
})();

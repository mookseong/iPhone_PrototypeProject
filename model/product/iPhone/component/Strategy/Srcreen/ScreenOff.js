export const ScreenOff = (function () {
    function Screen() {
    }

    Screen.prototype.execute = function () {
        console.log("화면꺼짐")
    };

    return Screen;
})();
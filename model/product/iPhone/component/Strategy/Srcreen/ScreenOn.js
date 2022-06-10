export const ScreenOn = (function () {
    function Screen() {
    }

    Screen.prototype.execute = function () {
        console.log("화면켜짐")
    };

    return Screen;
})();




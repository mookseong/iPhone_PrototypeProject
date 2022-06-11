export const browser = (function () {
    function Browser() {
        this.info = "[Safari]";
    }

    Browser.prototype.startApp = function () {
        console.log("[Safari]를 실행합니다.");
    };
    Browser.prototype.infoApp = function () {
        return this.info;
    };

    return Browser;
})();
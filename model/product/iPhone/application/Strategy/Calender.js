export const Calender = (function() {
    function Calender() {
        this.info = "캘린더 앱입니다."
    }
    Calender.prototype.startApp = function () {
        console.log("[캘린더]를 실행합니다.");
    };
    Calender.prototype.infoApp = function() {
        return this.info;
    };

    return Calender;
})();

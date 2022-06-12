export const memo = (function () {
    function Memo() {
        this.info = '[메모]';
    }

    Memo.prototype.startApp = function () {
        console.log("[메모]를 실행합니다.");
    };
    Memo.prototype.infoApp = function () {
        return this.info;
    };

    return Memo;
})();

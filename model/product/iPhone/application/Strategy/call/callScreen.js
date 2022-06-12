export const callScreen = (function () {
    function CallScreen() {
    }

    CallScreen.prototype.callUpdate = function () {
        return `[현재 화면을 전화 화면으로 전환합니다.]`;
    }

    return CallScreen;
})();

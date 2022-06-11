export const touchId = (function () {
    function TouchId() {
    }

    TouchId.prototype.register = function () {
        console.log("TouchId를 등록합니다.")
    };
    TouchId.prototype.certify = function () {
        console.log("TouchId로 인증합니다.")
    };
    TouchId.prototype.securityInfo = function () {
        console.log("TouchId를 사용합니다.")
    }

    return TouchId;
})();
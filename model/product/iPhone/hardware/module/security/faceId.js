export const faceId = (function () {
    function FaceId() {
    }

    FaceId.prototype.register = function () {
        console.log("FaceId를 등록합니다.")
    };
    FaceId.prototype.certify = function () {
        console.log("FaceId로 인증합니다.")
    };
    FaceId.prototype.securityInfo = function () {
        console.log("FaceId를 사용합니다.")
    }

    return FaceId;
})();
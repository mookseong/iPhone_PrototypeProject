export const normalCamera = (function () {
    function NormalCamera() {
    }

    NormalCamera.prototype.shot = function () {
        console.log("기본 모드로 촬영합니다.");
    };

    return NormalCamera;
})();


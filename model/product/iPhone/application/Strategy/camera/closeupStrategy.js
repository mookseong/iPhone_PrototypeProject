export const closeUpCamera = (function () {
    function CloseUpCamera() {
    }

    CloseUpCamera.prototype.shot = function () {
        console.log("클로즈업 모드로 촬영합니다.");
    };

    return CloseUpCamera;
})();
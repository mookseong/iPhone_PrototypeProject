export const panoramaCamera = (function () {
    function PanoramaCamera() {
    }

    PanoramaCamera.prototype.shot = function () {
        console.log("파노라마 모드로 촬영합니다.");
    };
    return PanoramaCamera;
})();


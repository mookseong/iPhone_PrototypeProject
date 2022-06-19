export const videoCamera = (function () {
    function VideoCamera() {
    }

    VideoCamera.prototype.shot = function () {
        console.log("비디오 모드로 촬영합니다.");
    };

    return VideoCamera;
})();


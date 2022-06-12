export const videoStrategy = (function () {
    function VideoStrategy() {
    }

    VideoStrategy.prototype.execute = function () {
        console.log("비디오 모드로 촬영합니다.");
    };

    return VideoStrategy;
})();
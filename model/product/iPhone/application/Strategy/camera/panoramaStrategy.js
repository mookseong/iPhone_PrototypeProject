export const panoramaStrategy = (function () {
    function PanoramaStrategy() {
    }

    PanoramaStrategy.prototype.execute = function () {
        console.log("파노라마 모드로 촬영합니다.");
    };
    return PanoramaStrategy;
})();
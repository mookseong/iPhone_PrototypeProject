//strategy
const Strategy = (function() {
    function Strategy() {
        this.strategy = null;
    }
    Strategy.prototype.setStrategy = function(strategy) {
        this.strategy = strategy;
    }
    Strategy.prototype.execute = function() {
        this.strategy.execute();
    };
    return Strategy;
})();

export const CameraStrategy = (function() {
    function CameraStrategy() {}
    CameraStrategy.prototype.execute = function() {
        console.log("[카메라]를 실행합니다.");
    };
    return CameraStrategy;
})();

export const CameraNormalStrategy = (function() {
    function CameraNormalStrategy() {}
    CameraNormalStrategy.prototype.execute = function() {
        console.log("기본 모드로 촬영합니다.");
    };
    return CameraNormalStrategy;
})();

export const CameraCloseUpStrategy = (function() {
    function CameraCloseUpStrategy() {}
    CameraCloseUpStrategy.prototype.execute = function() {
        console.log("클로즈업 모드로 촬영합니다.");
    };
    return CameraCloseUpStrategy;
})();

export const CameraPanoramaStrategy = (function() {
    function CameraPanoramaStrategy() {}
    CameraPanoramaStrategy.prototype.execute = function() {
        console.log("파노라마 모드로 촬영합니다.");
    };
    return CameraPanoramaStrategy;
})();

export const CameraVideoStrategy = (function() {
    function CameraVideoStrategy() {}
    CameraVideoStrategy.prototype.execute = function() {
        console.log("비디오 모드로 촬영합니다.");
    };
    return CameraVideoStrategy;
})();

/* testcode
const shot = new Strategy();
const closeUp = new CameraCloseUpStrategy();
const panorama = new CameraPanoramaStrategy();
const video = new CameraVideoStrategy();

shot.setStrategy(closeUp);
shot.setStrategy(panorama);
shot.setStrategy(video);
shot.execute();
*/




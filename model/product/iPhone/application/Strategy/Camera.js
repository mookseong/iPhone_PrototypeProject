//strategy
export const cameraStrategy = (function() {
    function CameraStrategy() {
        this.strategy = null;
        this.info = "[카메라]";
    }
    CameraStrategy.prototype.setStrategy = function(strategy) {
        this.strategy = strategy;
    }
    CameraStrategy.prototype.execute = function() {
        this.strategy.execute();
    };
    CameraStrategy.prototype.startApp = function () {
        console.log("[카메라]를 실행합니다.");
    };
    CameraStrategy.prototype.infoApp = function() {
        return this.info;
    };
    return CameraStrategy;
})();

export const cameraNormalStrategy = (function() {
    function CameraNormalStrategy() {}
    CameraNormalStrategy.prototype.execute = function() {
        console.log("기본 모드로 촬영합니다.");
    };
    return CameraNormalStrategy;
})();

export const cameraCloseUpStrategy = (function() {
    function CameraCloseUpStrategy() {}
    CameraCloseUpStrategy.prototype.execute = function() {
        console.log("클로즈업 모드로 촬영합니다.");
    };
    return CameraCloseUpStrategy;
})();

export const cameraPanoramaStrategy = (function() {
    function CameraPanoramaStrategy() {}
    CameraPanoramaStrategy.prototype.execute = function() {
        console.log("파노라마 모드로 촬영합니다.");
    };
    return CameraPanoramaStrategy;
})();

export const cameraVideoStrategy = (function() {
    function CameraVideoStrategy() {}
    CameraVideoStrategy.prototype.execute = function() {
        console.log("비디오 모드로 촬영합니다.");
    };
    return CameraVideoStrategy;
})();

//testcode
const shot = new cameraStrategy();
const closeUp = new cameraCloseUpStrategy();
const panorama = new cameraPanoramaStrategy();
const video = new cameraVideoStrategy();

shot.setStrategy(closeUp);
shot.setStrategy(panorama);
shot.setStrategy(video);
shot.execute();





//strategy
var Strategy = (function() {
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

var CameraStrategy = (function() {
    function CameraStrategy() {}
    CameraStrategy.prototype.execute = function() {
        console.log("기본 모드로 촬영합니다.");
    };
    return CameraStrategy;
})();

var CameraCloseUpStrategy = (function() {
    function CameraCloseUpStrategy() {}
    CameraCloseUpStrategy.prototype.execute = function() {
        console.log("클로즈업 모드로 촬영합니다.");
    };
    return CameraCloseUpStrategy;
})();

var CameraPanoramaStrategy = (function() {
    function CameraPanoramaStrategy() {}
    CameraPanoramaStrategy.prototype.execute = function() {
        console.log("파노라마 모드로 촬영합니다.");
    };
    return CameraPanoramaStrategy;
})();

var CameraVideoStrategy = (function() {
    function CameraVideoStrategy() {}
    CameraVideoStrategy.prototype.execute = function() {
        console.log("비디오 모드로 촬영합니다.");
    };
    return CameraVideoStrategy;
})();

// testcode
var shot = new Strategy();
var closeUp = new CameraCloseUpStrategy();
var panorama = new CameraPanoramaStrategy();
var video = new CameraVideoStrategy();

shot.setStrategy(closeUp);
shot.setStrategy(panorama);
shot.setStrategy(video);
shot.execute();




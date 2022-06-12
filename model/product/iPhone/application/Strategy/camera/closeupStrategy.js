export const closeupStrategy = (function () {
    function CloseUpStrategy() {
    }

    CloseUpStrategy.prototype.execute = function () {
        console.log("클로즈업 모드로 촬영합니다.");
    };

    return CloseUpStrategy;
})();
export const normalStrategy = (function () {
    function NormalStrategy() {
    }

    NormalStrategy.prototype.execute = function () {
        console.log("기본 모드로 촬영합니다.");
    };

    return NormalStrategy;
})();
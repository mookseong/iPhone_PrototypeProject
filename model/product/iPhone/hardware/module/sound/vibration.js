export const vibration = (function () {
    function Vibration() {
    }

    Vibration.prototype.play = function () {
        console.log("우우우우우~~ 진동이 들립니다.")
    };

    return Vibration;
})();
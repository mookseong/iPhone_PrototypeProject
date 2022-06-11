export const mute = (function () {
    function Mute() {
    }

    Mute.prototype.play = function () {
        console.log("무음으로 아무것도 들리지 않습니다.")
    };

    return Mute;
})();
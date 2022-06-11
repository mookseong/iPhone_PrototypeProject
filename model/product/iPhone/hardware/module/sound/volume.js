export const volume = (function () {
    function Volume() {
    }

    Volume.prototype.play = function () {
        console.log("빠빰~ 소리가 들립니다.")
    };

    return Volume;
})();
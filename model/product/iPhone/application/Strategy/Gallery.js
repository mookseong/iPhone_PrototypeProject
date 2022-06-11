export const gallery = (function() {
    function Gallery() {
        this.info = '[갤러리]';
    }
    Gallery.prototype.startApp = function () {
        console.log("[갤러리]를 실행합니다.");
    };
    Gallery.prototype.infoApp = function() {
        return this.info;
    };
    return Gallery;
})();

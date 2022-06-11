// const Gallery = function() {
//     Gallery.prototype.showPicture = function() {
//         console.log("사진들을 보여준다.");
//     }
//     Gallery.prototype.deletePicture = function() {
//         console.log("사진을 삭제한다.");
//     }
//     Gallery.prototype.editGallery = function() {
//         console.log("갤러리를 편집한다.");
//     }
// }

export const Gallery = (function() {
    function Gallery() {}
    Gallery.prototype.showPicture = function() {
        return `사진들을 보여준다.`;
    };
    Gallery.prototype.deletePicture = function() {
        return `사진들을 삭제한다.`;
    };
    Gallery.prototype.editGallery = function() {
        return `갤러리를 편집한다.`;
    };
    Gallery.prototype.execute = function() {
        return `[갤러리]를 실행합니다.`;
    };
    return Gallery;
})();

/* testcode
var myGallery = new Gallery();
console.log(myGallery.editGallery());
*/
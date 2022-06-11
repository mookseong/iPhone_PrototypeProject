// const Note = function() {
//     Note.prototype.addNote = function() {
//         console.log("메모를 추가한다.");
//     }
//     Note.prototype.deleteNote = function() {
//         console.log("메모를 삭제한다.");
//     }
//     Note.prototype.pinNote = function() {
//         console.log("메모를 고정한다.");
//     }
// }

export const Note = (function() {
    function Note() {}
    Note.prototype.addNote = function() {
        return `메모를 추가한다.`;
    };
    Note.prototype.deleteNote = function() {
        return `메모를 삭제한다.`;
    };
    Note.prototype.pinNote = function() {
        return `메모를 고정한다.`;
    };
    Note.prototype.execute = function() {
        console.log("[메모]를 실행합니다.");
    };
    return Note;
})();

/* testcode
var myNote = new Note();
console.log(myNote.addNote());
*/
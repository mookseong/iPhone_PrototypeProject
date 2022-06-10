// const Browser = function() {
//     Browser.prototype.search = function() {
//         console.log("인터넷 검색을 수행합니다.");
//     }
//     Browser.prototype.addTab = function() {
//         console.log("페이지 탭을 추가합니다.");
//     }
//     Browser.prototype.deleteTab = function() {
//         console.log("페이지 탭을 삭제합니다.");
//     }
//     Browser.prototype.deleteHistory = function() {
//         console.log("인터넷 검색기록을 삭제합니다.");
//     }
// }

const Browser = (function() {
    function Browser() {}
    Browser.prototype.search = function() {
        return `인터넷 검색을 수행합니다.`;
    };
    Browser.prototype.addTab = function() {
        return `페이지 탭을 추가합니다.`;
    };
    Browser.prototype.deleteTab = function() {
        return `페이지 탭을 삭제합니다.`;
    };
    Browser.prototype.deleteHistory = function() {
        return `인터넷 검색기록을 삭제합니다.`;
    };
    return Browser;
})();

// testcode
var myBrowser = new Browser();
console.log(myBrowser.search())
console.log(myBrowser.addTab())
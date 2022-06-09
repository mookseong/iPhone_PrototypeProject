// const Call = function() {
//     Call.prototype.makeAPhone = function() {
//         console.log("전화를 겁니다.");
//     }
//     Call.prototype.pickUpPhone = function() {
//         console.log("전화를 받습니다.")
//     }
// }


const Call = (function() {
    function Call() {}
    Call.prototype.makeAPhone = function() {
        return `전화를 겁니다.`;
    };
    Call.prototype.pickUpPhone = function() {
        return `전화를 받습니다.`;
    };
    return Call;
})();

// testcode
var ring1 = new Call();
console.log(ring1.makeAPhone())

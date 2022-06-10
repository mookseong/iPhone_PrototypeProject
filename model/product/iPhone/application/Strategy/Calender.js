// const Calender = function() {
//     Calender.prototype.addSchedule = function() {
//         console.log("일정을 추가합니다.");
//     }
//     Calender.prototype.deleteSchedule = function() {
//         console.log("일정을 삭제합니다.");
//     }
//     Calender.prototype.showCalender = function() {
//         console.log("일정 목록을 보여줍니다.");
//     }
// }

const Calender = (function() {
    function Calender() {}
    Calender.prototype.addSchedule = function() {
        return `일정을 추가합니다.`;
    };
    Calender.prototype.deleteSchedule = function() {
        return `일정을 삭제합니다.`;
    };
    Calender.prototype.showCalender = function() {
        return `일정 목록을 보여줍니다.`;
    };
    return Calender;
})();

// testcode
var myCalender = new Calender();
console.log(myCalender.showCalender())
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

export const Calender = (function() {
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
    Calender.prototype.execute = function() {
        return `[캘린더]를 실행합니다.`;
    };
    return Calender;
})();

/* testcode
var myCalender = new Calender();
console.log(myCalender.showCalender())
*/
// const Alarm = function() {
//     Alarm.prototype.setAlarm = function() {
//         console.log("알람을 설정합니다.");
//     }
//     Alarm.prototype.deleteAlarm = function() {
//         console.log("알람을 삭제합니다.");
//     }
//     Alarm.prototype.onAlarm = function() {
//         console.log("알람을 킵니다.");
//     }
//     Alarm.prototype.offAlarm = function() {
//         console.log("알람을 끕니다.");
//     }
// }


// const StopWatch = function() {
//     StopWatch.prototype.start = function() {
//         console.log("스탑워치를 시작합니다.");
//     }
//     StopWatch.prototype.stop = function() {
//         console.log("스탑워치를 중지합니다.");
//     }
//     StopWatch.prototype.reset = function() {
//         console.log("스탑워치를 초기화합니다.");
//     }
//     StopWatch.prototype.labTime = function() {
//         console.log("구간타임을 기록합니다.");
//     }
// }

// const Timer = function() {
//     Timer.prototype.start = function() {
//         console.log("타이머를 시작합니다.");
//     }
//     Timer.prototype.stop = function() {
//         console.log("타이머를 중지합니다.");
//     }
//     Timer.prototype.cancel = function() {
//         console.log("타이머를 종료합니다.");
//     }
// }


export const Alarm = (function() {
    function Alarm() {}
    Alarm.prototype.setAlarm = function() {
        return `알람을 설정합니다.`;
    };
    Alarm.prototype.deleteAlarm = function() {
        return `알람을 삭제합니다.`;
    };
    Alarm.prototype.onAlarm = function() {
        return `알람을 킵니다.`;
    };
    Alarm.prototype.offAlarm = function() {
        return `알람을 끕니다.`;
    };
    Alarm.prototype.execute = function() {
        return `[알람]을 실행합니다.`;
    };
    return Alarm;
})();


export const StopWatch = (function() {
    function StopWatch() {}
    StopWatch.prototype.watchStart = function() {
        return `스탑워치를 시작합니다.`;
    };
    StopWatch.prototype.watchStop = function() {
        return `스탑워치를 중지합니다.`;
    };
    StopWatch.prototype.watchReset = function() {
        return `스탑워치를 초기화합니다.`;
    };
    StopWatch.prototype.watchLabTime = function() {
        return `구간타임을 기록합니다.`;
    };
    StopWatch.prototype.execute = function() {
        return `[스톱워치]를 실행합니다.`;
    };
    return StopWatch;
})();


export const Timer = (function() {
    function Timer(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    Timer.prototype.TimerStart = function() {
        return `[${this.hour}시간 ${this.minute}분 ${this.second}초] 타이머를 시작합니다.`;
    };
    Timer.prototype.TimerStop = function() {
        return `타이머를 중지합니다.`;
    };
    Timer.prototype.TimerCancel = function() {
        return `타이머를 종료합니다.`;
    };
    Timer.prototype.execute = function() {
        return `[타이머]를 실행합니다.`;
    };
    return Timer;
})();


/* testcode
var user = new Timer(1, 10, 30);
console.log(user.TimerStart());
*/

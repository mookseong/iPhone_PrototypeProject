// call - observer
export const call = (function() {
    function Call() {
        this.observers = [];
        this.info = "[전화]";
    }
    Call.prototype.register = function(obs) {
        this.observers.push(obs);
    }
    Call.prototype.makeAPhone = function() {
        return `전화 신호를 보냅니다...`;
    };
    Call.prototype.pickUpPhone = function() {
        console.log("전화 신호를 받았습니다...");
        this.observers.forEach((obs) => {
            try {
                console.log(obs.callUpdate());
            } catch {
                return 0;
            }
        });
    };
    Call.prototype.startApp = function() {
        return `[전화]를 실행합니다.`;
    };
    Call.prototype.infoApp = function() {
        return this.info;
    };
    return Call;
})();

export const CallObserver = (function() {
    function CallObserver() {}
    CallObserver.prototype.callUpdate = function() {};
    return CallObserver;
})();

// Screen, Sound 부분에 추가
const Screen = (function() {
    function Screen() {}
    Screen.prototype.callUpdate = function() {
        return `[현재 화면을 전화 화면으로 전환합니다.]`;
    }
    return Screen;
})();
Screen.__proto__ = new CallObserver();

const Sound = (function() {
    function Sound() {}
    Sound.prototype.callUpdate = function() {
        return `[컬러링이 울립니다.]`;
    }
    return Sound;
})();
Sound.__proto__ = new CallObserver();

/* testcode
var call = new call();
var screen = new Screen();
var sound = new Sound();

call.register(screen);
call.register(sound);

call.pickUpPhone();
*/

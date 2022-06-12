import { callScreen } from "./callScreen.js";
import { callSound } from "./callSound.js";

// call - observer
export const call = (function () {
    function Call() {
        this._observers = [];
        this._info = "[전화]";
    }

    Call.prototype.register = function (obs) {
        this._observers.push(obs);
    }
    Call.prototype.makeAPhone = function () {
        return `전화 신호를 보냅니다...`;
    };
    Call.prototype.pickUpPhone = function () {
        console.log("전화 신호를 받았습니다...");
        this._observers.forEach((obs) => {
            try {
                console.log(obs.callUpdate());
            } catch {
                return 0;
            }
        });
    };
    Call.prototype.startApp = function () {
        console.log("[전화]를 실행합니다.");
    };
    Call.prototype.infoApp = function () {
        return this._info;
    };

    return Call;
})();

export const callObserver = (function () {
    function CallObserver() {
    }

    CallObserver.prototype.callUpdate = function () {
    };

    return CallObserver;
})();

callSound.__proto__ = new callObserver();
callScreen.__proto__ = new callObserver();

/* testcode
var myCall = new call();
var screen = new callScreen();
var sound = new callSound();

myCall.register(screen);
myCall.register(sound);

myCall.pickUpPhone();
*/

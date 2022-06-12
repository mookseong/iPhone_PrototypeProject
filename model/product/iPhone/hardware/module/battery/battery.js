export const batterySubject = (function () {
    function BatteryObserver() {
        this._observers = [];
    }

    BatteryObserver.prototype.subscribe = function (observer) {
        this._observers.push(observer);
    };
    BatteryObserver.prototype.unsubscribe = function (observer) {
        this._observers.splice(this._observers.indexOf(observer), 1);
    };
    BatteryObserver.prototype.notifyAll = function (changeOfState) {
        this._observers.forEach((observer) => observer.notify(changeOfState));
    };

    return BatteryObserver
})();

export const battery = (function () {
    function Battery(Subject) {
        this._subject = Subject
        this._state = 100
    }

    Battery.prototype.setState = function (state) {
        this._state = state
        this.stateCheck();
    };
    Battery.prototype.getState = function () {
        return this._state;
    };
    Battery.prototype.stateCheck = function () {
        if (this._state <= 20) this._subject.notifyAll(this._state);
    };

    return Battery
})();
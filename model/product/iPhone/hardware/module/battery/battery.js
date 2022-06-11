export const batterySubject = (function () {
    function BatteryObserver() {
        this.observers = [];
    }

    BatteryObserver.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    BatteryObserver.prototype.unsubscribe = function (observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    };
    BatteryObserver.prototype.notifyAll = function (changeOfState) {
        this.observers.forEach((observer) => observer.notify(changeOfState));
    };

    return BatteryObserver
})();

export const battery = (function () {
    function Battery(Subject) {
        this.subject = Subject
        this.state = 100
    }

    Battery.prototype.setState = function (state) {
        this.state = state
        this.stateCheck();
    };
    Battery.prototype.getState = function () {
        return this.state;
    };
    Battery.prototype.stateCheck = function () {
        if (this.state <= 20) this.subject.notifyAll(this.state);
    };

    return Battery
})();

const subject1 = new batterySubject();
const observer = {
    notify: (change) => console.log(`배터리상태는 ${change} 입니다.`)
};
subject1.subscribe(observer);



export const Subject = (function () {
    function Observer() {
        this.observers = [];
        this.state = null;
    }

    Observer.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Observer.prototype.unsubscribe = function (observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    };
    Observer.prototype.notifyAll = function (changeOfState) {
        this.observers.forEach((observer) => observer.notify(changeOfState));
    };

    return Observer
})();

const BatteryState = (function () {
    function Battery(Subject) {
        this.subject = Subject
        this.state = 0
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
const subject = new Subject();
const batteryState = new BatteryState(subject)

const observer = {
    notify: (change) => console.log(`배터리상태는 ${change} 입니다.`)
};
subject.subscribe(observer);

batteryState.setState(50);
batteryState.setState(10);


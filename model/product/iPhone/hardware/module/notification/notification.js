export const notification = (function () {
    function NotificationObserver() {
        this.observers = [];
    }

    NotificationObserver.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    NotificationObserver.prototype.unsubscribe = function (observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    };
    NotificationObserver.prototype.notifyAll = function (title, changeOfState) {
        this.observers.forEach((observer) => observer.notify(title, changeOfState));
    };

    return NotificationObserver
})();
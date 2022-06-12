export const notification = (function () {
    function NotificationObserver() {
        this._observers = [];
    }

    NotificationObserver.prototype.subscribe = function (observer) {
        this._observers.push(observer);
    };
    NotificationObserver.prototype.unsubscribe = function (observer) {
        this._observers.splice(this._observers.indexOf(observer), 1);
    };
    NotificationObserver.prototype.notifyAll = function (title, changeOfState) {
        this._observers.forEach((observer) => observer.notify(title, changeOfState));
    };

    return NotificationObserver
})();
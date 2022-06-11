import {notification} from "../iPhone/hardware/module/notification/notification.js";

const mac = (function () {
    function MacBook() {
        this.notificationObserver = new notification();
        const macbook = {
            notify: (title, change) => {
                console.log("\"Mac\"에서 알림이 울립니다.");
                console.log(`${title}\n${change}`);
            }
        };
        this.notificationObserver.subscribe(macbook);
    }

    MacBook.prototype.start = function () {

    };
    MacBook.prototype.component = function () {

    };
    return MacBook;
})();

const mac1 = new mac();
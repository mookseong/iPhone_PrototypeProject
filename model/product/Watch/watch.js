import {notification} from "../iPhone/hardware/module/notification/notification.js";

const watch = (function () {
    function Watch() {
        this.notificationObserver = new notification();
        const macbook = {
            notify: (title, change) => {
                console.log("\"Mac\"에서 알림이 울립니다.");
                console.log(`${title}\n${change}`);
            }
        };
        this.notificationObserver.subscribe(macbook);
    }

    Watch.prototype.start = function () {

    };
    Watch.prototype.component = function () {

    };
    return Watch;
})();

const watch1 = new watch();
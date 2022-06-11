import { Browser } from "./Strategy/Browser.js";
import { Calender } from "./Strategy/Calender.js";
import { Call } from "./Strategy/Call.js";
import { CameraStrategy } from "./Strategy/Camera.js";
import { Alarm, StopWatch, Timer } from "./Strategy/Clock.js";
import { Gallery } from "./Strategy/Gallery.js";
import { Note } from "./Strategy/Notes.js";

// const Strategy = (function() {
//     function Strategy() {
//         this.strategy = null;
//     }
//     Strategy.prototype.setStrategy = function(strategy) {
//         this.strategy = strategy;
//     }
//     Strategy.prototype.execute = function() {
//         this.strategy.execute();
//     };
//     return Strategy;
// })();

const IPhoneUser = (function() {
    function IPhoneUser() {}
    IPhoneUser.prototype.operate = function(commander) {
      commander.execute();
    };
    return IPhoneUser;
})();

var Commander = (function() {     // appSwitcher
    function Commander() {
      this.runApp = [];
      this.stayApp = [];
    }
    Commander.prototype.execute = function() {
      this.runApp.forEach(function(command) {
        command();
      });
    };
    Commander.prototype.openApp = function(command) {
      if (this.runApp == null) {
        this.runApp.push(function() {
          command.call(null);
        });
      }
      else if (this.runApp != null) {
        this.stayApp.push(function() {
          command.call(null);
        });
      }
    };
    Commander.prototype.closeApp = function() {
      if (this.runApp == null) {
        return `실행시킨 App이 없습니다.`;
      }
      else if (this.runApp != null) {
        this.runApp.pop();
        this.runApp.push(this.stayApp[0]);
        this.stayApp.pop();
      }
    };
    return Commander;
})();


const iPhoneUser = new IPhoneUser();
const appSwitcher = new Commander();
const browser = new Browser();
const calender = new Calender();
const call = new Call();
const camera = new CameraStrategy();
const alarm = new Alarm();
const stopwatch = new StopWatch();
const timer = new Timer();
const gallery = new Gallery();
const note = new Note();

appSwitcher.openApp(browser.execute())
appSwitcher.openApp(calender.execute())
appSwitcher.closeApp()

iPhoneUser.operate()

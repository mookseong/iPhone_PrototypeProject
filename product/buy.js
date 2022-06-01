import {iPhone13_Option} from "../Data/iPhone.js"
import {BuySystem} from  "./buyEngine.js"
import {BuyContext} from  "./buyEngine.js"

const AirPods = (function () {
    function AirPods() {
    }

    AirPods.prototype.setOption = function(){
        this.Option = "옵션 테스트222 "
    };

    AirPods.prototype.setup = function (){
        this.setOption()
    }


    return AirPods;
})();

const ListOption = (function () {
    function BuySystem() {
        this.buySystem = null;
        this.Option = null
    }

    BuySystem.prototype.setMenu = function (setBuySystem) {
        this.buySystem = setBuySystem;
    };

    BuySystem.prototype.setup = function () {
        this.buySystem.setup()
    };

    return BuySystem;
})();


// const strat = new BuySystem();
// const tt = new AirPods();
//
// strat.setMenu(tt);
// strat.startUp()


const buySystem = new BuySystem();
const buyContext = new BuyContext();

buyContext.option(iPhone13_Option.iPhoneModel);
buyContext.option(iPhone13_Option.iPhoneStorage);
buyContext.option(iPhone13_Option.iPhoneColor);
buyContext.option(iPhone13_Option.trade_in);



buySystem.execute(buyContext);
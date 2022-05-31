const BuySystem = (function() {
    function BuySystem() {
        this.buySystem = null;
        this.Option = null
    };

    BuySystem.prototype.setMenu = function(setBuySystem){
        this.buySystem = setBuySystem;
    };
    
    // BuySystem.prototype.setOption = function(){
    //     this.buySystem.setOption()
    // };

    BuySystem.prototype.finishBuy = function(){
        console.log("1. 구매하기 2.장바구니 담기");
        return 0;
    };
    
    BuySystem.prototype.startUp = function(){
        this.buySystem.startUp()
    };
    
    return BuySystem;
})();

const AirPods = (function () {
    function AirPods() {
    };

    AirPods.prototype.setOption = function(){
        this.Option = "옵션 테스트 "
    };

    AirPods.prototype.startUp = function () {
        console.log("StratUP");
        this.setOption()
        console.log(this.Option)
    };

    return AirPods;
})();

const strat = new BuySystem();
const tt = new AirPods();

strat.setMenu(tt);
strat.startUp()
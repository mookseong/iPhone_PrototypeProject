const BuySystem = (function () {
    function BuySystem() {
    }
    BuySystem.prototype.setStrategy = function (buySystem) {
        this.BuySystem = buySystem;
    };

    BuySystem.prototype.buy = function () {
        this.BuySystem.buy();
    };


    return BuySystem;
})();


const test = (function () {
    function test() {
    }

    test.prototype.buy = function () {
        console.log('test1');
    };
    return test;
})();


const test2 = (function () {
    function test2() {
    }

    test2.prototype.buy = function () {
        console.log('test2');
    };
    return test2;
})();
const strat = new BuySystem();
const tt = new test();
const ee = new test2();

strat.setStrategy(tt); // 전략을 바꿈
strat.setStrategy(ee);
strat.buy(); // 어떤 전략이든 설정된 것을 실행
// 육로로 이탈리아에 갑니다.
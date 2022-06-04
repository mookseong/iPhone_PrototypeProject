export const Basket = (function() {
    function Basket(item) {
        this.item = item;
        this.itemList = [];
    };
    Basket.prototype.getItem = function() {
        return this._item;
    };
    Basket.prototype.setItem = function(item) {
        if(typeof item != 'string') {
            return alert("잘 못 입력하였습니다.");
        }
        return this._item = item;
    }
    Basket.prototype.update = function(datamanager) {
        console.log(`${this.name}이(가) 장바구니에 있습니다.`);
    };
    Basket.prototype.thisPlus = function() {
        var self = this;
        this.itemList.forEach(function(thisItem) {
            thisItem.plusAmount(self);
            return true;
        });
    };
    Basket.prototype.thisMinus = function() {
        var self = this;
        this.itemList.forEach(function(thisItem) {
            thisItem.minusAmount(self);
            return true;
        });
    };
    return Basket;
})();


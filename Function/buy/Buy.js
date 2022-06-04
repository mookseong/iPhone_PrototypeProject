import {buySystem, buyCommander} from "./BuyEngine.js"
import {List_iPhone13} from "./BuyOptionList.js";


const selectOption = function (List) {
    const buy = new buySystem();
    let commander = new buyCommander();

    List(commander)
    buy.select(commander);
    buy.buy(commander);
}

selectOption(List_iPhone13)
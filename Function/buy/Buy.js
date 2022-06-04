import {List_iPhone13} from "./option/BuyOptionList.js";
import {buyCommander} from "./commander/BuyCommander.js";



const selectOption = function (List) {
    const buy = new buy();
    let commander = new buyCommander();

    List(commander)
    buy.select(commander);
    buy.buy(commander);
}

selectOption(List_iPhone13)
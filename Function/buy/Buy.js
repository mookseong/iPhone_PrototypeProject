import {List_iPhone13} from "./option/BuyOptionList.js";
import {buyCommander} from "./commander/BuyCommander.js";



const SelectOption = function (List) {
    const buy = new buy();
    let commander = new buyCommander();

    List(commander)
    buy.select(commander);
    buy.buy(commander);
}

SelectOption(List_iPhone13)
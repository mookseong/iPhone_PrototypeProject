import {iPhone13_Option} from "../../../data/product/iPhone.js";

export const List_iPhone13= function(commander) {
    commander.option(iPhone13_Option.iPhoneModel);
    commander.option(iPhone13_Option.iPhoneStorage);
    commander.option(iPhone13_Option.iPhoneColor);
    commander.option(iPhone13_Option.trade_in);
};

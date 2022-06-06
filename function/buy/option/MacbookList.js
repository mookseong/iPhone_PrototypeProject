import {Mac_Option} from "../../../data/product/MacOption.js";

export const List_MacBook= function (commander) {
    commander.option(Mac_Option.MacRam);
    commander.option(Mac_Option.MacColor);
    commander.option(Mac_Option.MacStorage);
    commander.option(Mac_Option.trade_in)
};
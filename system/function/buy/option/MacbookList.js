import {MacList} from "./MacList.js";

export const MacBookList= function (commander) {
    commander.option(MacList.MacRam);
    commander.option(MacList.MacColor);
    commander.option(MacList.MacStorage);
    commander.option(MacList.trade_in)
};
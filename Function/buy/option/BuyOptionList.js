import {iPhone13_Option} from "../../../Data/product/iPhone.js"
import {iPad_Pro_Option} from "../../../Data/product/iPad.js";
import {AirPod_Option} from "../../../Data/product/AirPods.js";
import {Mac_Option} from "../../../Data/product/mac/MacOption.js";

export const List_iPhone13= function(commander) {
    commander.option(iPhone13_Option.iPhoneModel);
    commander.option(iPhone13_Option.iPhoneStorage);
    commander.option(iPhone13_Option.iPhoneColor);
    commander.option(iPhone13_Option.trade_in);
}
export const List_iPad= function(commander) {
    commander.option(iPad_Pro_Option.iPadModel);
    commander.option(iPad_Pro_Option.iPadColor);
    commander.option(iPad_Pro_Option.iPadStorage);
    commander.option(iPad_Pro_Option.Cellular)
    commander.option(iPad_Pro_Option.carving);
    commander.option(iPad_Pro_Option.Apple_Pencil);
    commander.option(iPad_Pro_Option.trade_in);
}

export const List_AirPods= function(commander) {
    commander.option(AirPod_Option.carving);
}


export const List_MacBookAir= function (commander) {
    commander.option(Mac_Option.MacRam);
    commander.option(Mac_Option.MacColor);
    commander.option(Mac_Option.MacStorage);
    commander.option(Mac_Option.trade_in)
}


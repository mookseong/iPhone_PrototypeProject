import {iPad_Pro_Option} from "../../../../model/product/iPad/iPad.js";

export const iPadList= function(commander) {
    commander.option(iPad_Pro_Option.iPadModel);
    commander.option(iPad_Pro_Option.iPadColor);
    commander.option(iPad_Pro_Option.iPadStorage);
    commander.option(iPad_Pro_Option.Cellular)
    commander.option(iPad_Pro_Option.carving);
    commander.option(iPad_Pro_Option.Apple_Pencil);
};

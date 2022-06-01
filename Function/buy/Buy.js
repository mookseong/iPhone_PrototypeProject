import {iPhone13_Option} from "../../Data/product/iPhone.js"
import {BuySystem, BuyContext} from "./BuyEngine.js"

const List_iPhone13= function iPhone(Context) {
    Context.option(iPhone13_Option.iPhoneModel);
    Context.option(iPhone13_Option.iPhoneStorage);
    Context.option(iPhone13_Option.iPhoneColor);
    Context.option(iPhone13_Option.trade_in);
}

const buySystem = new BuySystem();
const buyContext = new BuyContext();

List_iPhone13(buyContext)
buySystem.select(buyContext);

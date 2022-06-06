import {BuyOption} from "./Strategy/BuyOption.js";
import {BuyStrategy} from "./Strategy/BuyStrategy.js";
import {List_iPhone13} from "./option/iPhoneList.js";
import {List_iPad} from "./option/iPadList.js";
import {List_MacBook} from "./option/MacbookList.js";
import {List_AirPods} from "./option/AirpodList.js";
import {BuyBasket} from "./Strategy/BuyBasket.js";

const buyStrategy = new BuyStrategy();

export const Option = function (model){
    const buyOption = new BuyOption();
    switch (model) {
        case "iPhone" :
            List_iPhone13(buyOption);
            break;
        case "iPad" :
            List_iPad(buyOption);
            break;
        case "Mac" :
            List_MacBook(buyOption);
            break;
        case "AirPod" :
            List_AirPods(buyOption);
            break;
        default :
            console.log("(무언가 잘못된 값이 들어온것 같습니다)");
    }
    buyStrategy.setStrategy(buyOption);
    buyStrategy.execute(buyOption);
    buyStrategy.buy();
}
export const buyS = function (model){
    const buyBasket = new BuyBasket();

    buyStrategy.setStrategy(buyBasket);
    buyStrategy.execute(buyBasket);
    buyStrategy.buy();
}



Option("iPhone")
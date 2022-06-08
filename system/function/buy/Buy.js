import {BuyOption} from "./Strategy/BuyOption.js";
import {BuyStrategy} from "./Strategy/BuyStrategy.js";
import {iPhone13List} from "./option/iPhoneList.js";
import {iPadList} from "./option/iPadList.js";
import {MacBookList} from "./option/MacbookList.js";
import {AirPodsList} from "./option/AirpodList.js";
import {BuyBasket} from "./Strategy/BuyBasket.js";

const buyStrategy = new BuyStrategy();

export const Option = function (model){
    const buyOption = new BuyOption();
    switch (model) {
        case "iPhone" :
            iPhone13List(buyOption);
            break;
        case "iPad" :
            iPadList(buyOption);
            break;
        case "Mac" :
            MacBookList(buyOption);
            break;
        case "AirPod" :
            AirPodsList(buyOption);
            break;
        default :
            console.log("(무언가 잘못된 값이 들어온것 같습니다)");
    }
    buyStrategy.setStrategy(buyOption);
    buyStrategy.execute(buyOption);
    buyStrategy.buy();
}
export const buySystem = function (model){
    const buyBasket = new BuyBasket();

    buyStrategy.setStrategy(buyBasket);
    buyStrategy.execute(buyBasket);
    buyStrategy.buy();
}

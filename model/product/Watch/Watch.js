import {WatchModel} from "../../DataModel.js";

export const Watch_Option = {
    WatchModel: function () {
        const model = {
            title: "원하는 모델을 선택하세요.", option: {
                list1: "41mm형 디스플레이 - ₩559,000부터", list2: "45mm형 디스플레이 - ₩599,000부터"
            }
        };
    }, WatchColor: function () {
        const color = {
            title: "맘에 드는 색상을 선택하세요.", option: {
                list1: "Space Gray", list2: "Silver"
            }
        };
    }, Cellular: function () {
        const cellular = {
            title: "원하시는 연결성을 선택해주세요", option: {
                list1: "WIFI", list2: "WIFI + Cellular"
            }
        };
    }, trade_in: function () {
        console.log('보상 판매할 AppleWatch가 있으신가요?\n');
    }
};
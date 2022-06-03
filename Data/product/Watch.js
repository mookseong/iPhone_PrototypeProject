import {Watch} from "../../Model/DataModel.js";

const Watch7 =
    Watch("Watch7").setModel("A1346").setGeneration(7).setColor('Silver').build();

export const Watch_Option = {
    WatchModel: function () {
        console.log("원하는 모델을 선택하세요.");
        console.log('1.41mm형 디스플레이 - ₩559,000부터\n2.45mm형 디스플레이 - ₩599,000부터\n');
    },
    WatchColor: function () {
        console.log("맘에 드는 색상을 선택하세요.");
        console.log('1.Space Gray\t2.Silver\n');
    },
    Cellular: function () {
        console.log("원하시는 연결성을 선택해주세요");
        console.log('1.WIFI \t2.WIFI + Cellular\n');
    },
    trade_in: function () {
        console.log('보상 판매할 AppleWatch가 있으신가요?\n');
    }
};

//출력 테스트
console.log(Watch7);
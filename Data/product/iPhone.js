import {iModel} from "../../Model/DataModel.js";
import {ProductPerformance} from "../../Model/DataModel.js";

let iPhone_Performance =
    new ProductPerformance().setCPU('A15').setRAM('6G').setScreenSize(6.1).setStorage(128).build()
let iPhone13 =
    new iModel('iPhone13')
        .setModel('A2378')
        .setColor('Silver')
        .setPerformance(iPhone_Performance)
        .setGeneration(13)
        .build()

export const iPhone13_Option = {
    iPhoneModel: function () {
        console.log("원하는 모델을 선택하세요.");
        console.log('1.iPhone 13 mini - ₩950,000부터\n2.iPhone 13 - ₩1,090,000부터\n');
    },
    iPhoneColor: function () {
        console.log("맘에 드는 마감을 선택하세요.");
        console.log('1.그린\t2.핑크\n3.블루\t4.미드나이트\n5.스타라이트\t6.(PRODUCT)RED\n');
    },
    iPhoneStorage: function () {
        console.log('원하는 용량을 선택하세요.');
        console.log('1.128G - ₩1,090,000"\t2.256G - ₩1,230,000"\n3.512G - ₩1,500,000\n');
    },
    trade_in: function () {
        console.log('보상 판매할 iPhone이 있으신가요?\n');
    }
};

// 출력 테스트
console.log(iPhone13)

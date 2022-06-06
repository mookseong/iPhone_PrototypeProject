import {iModel} from "../../model/DataModel.js";
import {ProductPerformance} from "../../model/DataModel.js";
import {JsonInfo} from "../../function/json/JsonRead.js";

export const iPhone_Performance = new ProductPerformance()
    .setCPU('A15')
    .setRAM('6G')
    .setScreenSize(6.1)
    .setStorage(128).build();
export const iPhone13 = new iModel('iPhone13')
    .setModel('A2378')
    .setColor('Silver')
    .setPerformance(iPhone_Performance)
    .setGeneration(13).build();



export const iPhone13_Option = {
    iPhoneModel: function () {
        const model = {
            title: "원하는 모델을 선택하세요.", option: {
                list1: "iPhone 13 mini - ₩950,000부터", list2: "iPhone 13 - ₩1,090,000부터"
            }
        };
        JsonInfo(model);
    }, iPhoneColor: function () {
        const color = {
            title: "맘에 드는 마감을 선택하세요.", option: {
                list1: "그린", list2: "핑크", list3: "블루", list4: "미드나이트", list5: "스타라이트", list6: "(PRODUCT)RED"
            }
        };
        JsonInfo(color);
    }, iPhoneStorage: function () {
        const Storage = {
            title: "원하는 용량을 선택하세요.", option: {
                list1: "128G - ₩1,090,000", list2: "256G - ₩1,230,000", list3: "512G - ₩1,500,000"
            }
        };
        JsonInfo(Storage);
    }, trade_in: function () {
        const trade = {
            title: "보상 판매할 iPhone이 있으신가요?"
        };
    }
};


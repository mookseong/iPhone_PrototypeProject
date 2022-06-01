import {iModel, ProductPerformance} from "../../Model/DataModel.js";


const iPad_Performance =
    new ProductPerformance().setCPU('M1').setRAM('8G').setScreenSize(12.9).setStorage(128).build()
export const iPad_Pro_5_SpaceGray =
    new iModel('12.9형 iPad Pro(5세대)')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(iPad_Performance)
        .setGeneration(5)
        .build()
export const iPad_Pro_5_Silver =
    new iModel('12.9형 iPad Pro(5세대)')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(iPad_Performance)
        .setGeneration(5)
        .build()

export const iPad_Pro_Option = {
    iPadModel: function () {
        console.log("원하는 모델을 선택하세요.");
        console.log('1.11형 디스플레이 - ₩999,000부터\n2.12.9형 디스플레이 - ₩1,379,000부터\n');
    },
    iPadColor: function () {
        console.log("맘에 드는 마감을 선택하세요.")
        console.log('1.스페이스 그레이\t2.실버\n');
    },
    iPadStorage: function () {
        console.log('원하는 용량을 선택하세요.');
        console.log('1.128G \t2.256G "\n3.512G\t4.1Tb\n5. 2TB\n');
    },
    Cellular: function () {
        console.log("원하시는 연결성을 선택해주세요")
        console.log('1.WIFI \t2.WIFI + Cellular\n');
    },
    carving: function () {
        console.log("나만의 아이패드 만들기")
        console.log('1.각인 있음 \t2.각인없음\n');
    },
    Apple_Pencil: function () {
        console.log("Apple_Pencil추가하기")
        console.log('1.추가 \t2.없음\n');
    },
    trade_in: function () {
        console.log('보상 판매할 iPhone이 있으신가요?\n');
    }
};

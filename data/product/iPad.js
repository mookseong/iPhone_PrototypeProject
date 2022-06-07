import {iModel, ProductPerformance} from "../../model/DataModel.js";
import {JsonInfo} from "../../function/json/JsonRead.js";

export const iPad_Pro_Option = {
    iPadModel: function () {
        const model = {
            title: "원하는 모델을 선택하세요.", option: {
                list1: "11형 디스플레이 - ₩999,000부터", list2: "12.9형 디스플레이 - ₩1,379,000부터"
            }
        };
        JsonInfo(model);
    }, iPadColor: function () {
        const color = {
            title: "맘에 드는 마감을 선택하세요.", option: {
                list1: "스페이스 그레이", list2: "실버"
            }
        };
        JsonInfo(color);
    }, iPadStorage: function () {
        const storage = {
            title: "원하는 용량을 선택하세요.", option: {
                list1: "128G", list2: "256G", list3: "512G", list4: "1Tb", list: "2TB"
            }
        };
        JsonInfo(storage);
    }, Cellular: function () {
        const cellular = {
            title: "원하시는 연결성을 선택해주세요", option: {
                list1: "WIFI", list2: "WIFI + Cellular"
            }
        };
        JsonInfo(cellular);
    }, carving: function () {
        const carving = {
            title: "나만의 아이패드 만들기", option: {
                list1: "각인 있음", list2: "각인없음"
            }
        };
        JsonInfo(carving);
    }, Apple_Pencil: function () {
        const pencil = {
            title: "Apple_Pencil 추가하기", option: {
                list1: "추가", list2: "없음"
            }
        };
        JsonInfo(pencil);
    },
};

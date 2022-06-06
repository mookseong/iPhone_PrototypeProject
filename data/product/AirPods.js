import {AirPods} from "../../model/DataModel.js";

const AirPod1 = AirPods("AirPod").setModel("A1523").setGeneration(2).build();
const AirPod2 = AirPods("AirPod2").setModel("A2032").setGeneration(2).build();
const AirPod3 = AirPods("AirPod3").setModel("A2565").setGeneration(3).build();
const AirPod_Max = AirPods("AirPods Max").setModel("A2096").setGeneration(1).build();
const AirPod_Pro = AirPods("AirPod Pro").setModel("A2084").setGeneration(1).build();

export const AirPod_Option = {
    carving: function () {
        console.log('나만의 에어팟 만들기\n');
        console.log('1.각인 있음 \t2.각인없음\n');
    }
};


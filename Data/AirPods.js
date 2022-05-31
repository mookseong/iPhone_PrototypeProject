import {AirPods} from "../Module/DataModel.js";
const AirPod2 = AirPods("AirPod2").setModel("A1938").setGeneration(2).build();
const AirPod3 = AirPods("AirPod3").setModel("A1938").setGeneration(3).build();
console.log(AirPod2)
console.log(AirPod3)
import {iModel,ProductPerformance} from "../../Model/DataModel.js";
import {} from "../../Model/DataModel.js";

const iPad_Performance =
    new ProductPerformance().setCPU('M1').setRAM('8G').setScreenSize(12.9).setStorage(128).build()
export const iPad_Pro =
    new iModel('iPad Pro')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(iPad_Performance)
        .setGeneration(5)
        .build()


console.log(iPad_Pro.Name)
console.log(iPad_Pro.Color)
console.log(iPad_Pro.Performance.CPU)

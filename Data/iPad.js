import {iModel} from "../Module/DataModel.js";
import {ProductPerformance} from "../Module/DataModel.js";
let iPad_Performance =
    new ProductPerformance().setCPU('M1').setRAM('8G').setScreenSize(12.9).setStorage(128).build()
let iPad_Pro =
    new iModel('iPad Pro')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(iPad_Performance)
        .setGeneration(5)
        .build()

console.log(iPad_Pro.Performance)
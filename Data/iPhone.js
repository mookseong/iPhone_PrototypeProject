import {iModel} from "../Module/DataModel.js";
import {ProductPerformance} from "../Module/DataModel.js"
let iPhone_Performance =
    new ProductPerformance().setCPU('A15').setRAM('G6').setScreenSize(6.1).setStorage(128).build()
let iPhone13 =
    new iModel('iPhone13')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(iPhone_Performance)
        .setGeneration(5)
        .build()

console.log(iPhone13.Performance)
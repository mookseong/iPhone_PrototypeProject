import {iModel} from "../Module/DataModel.js";
import {ProductPerformance} from "../Module/DataModel.js";


const iPhone13_Performance =
    new ProductPerformance().setCPU('A15').setRAM('G6').setScreenSize(6.1).setStorage(128)
const iPhone13 =
    new iModel('iPhone13')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(iPhone13_Performance)
        .setGeneration(5)
        .build()

console.log(iPhone13)

f
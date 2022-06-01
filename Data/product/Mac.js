import {iModel} from "../../Model/DataModel.js";
import {ProductPerformance} from "../../Model/DataModel.js";
let MacBook16_Performance =
    new ProductPerformance().setCPU('M1Pro').setRAM('32G').setScreenSize(16.2).setStorage(1000).build()
let MacBook16 =
    new iModel('MacBook16')
        .setModel('A3567')
        .setColor('Silver')
        .setPerformance(MacBook16_Performance)
        .setGeneration(3)
        .build()

console.log(MacBook16.Performance)
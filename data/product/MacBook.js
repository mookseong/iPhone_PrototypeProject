import {iModel, ProductPerformance} from "../../model/DataModel.js";

const MacbookAirList = function () {
    const MacBook_Air_Performance =
        new ProductPerformance()
            .setCPU('M1 7GPU')
            .setRAM('8G')
            .setScreenSize(13)
            .setStorage(256)
            .build();
    const MacBook_Air_high_Performance =
        new ProductPerformance()
            .setCPU('M1 8GPU')
            .setRAM('8G')
            .setScreenSize(13)
            .setStorage(512)
            .build();

    this.MacBook_Air =
        new iModel('MacBook_Air')
            .setModel('MGN63xx/A')
            .setColor('Silver')
            .setPerformance(MacBook_Air_Performance)
            .setGeneration(2020)
            .build();
    this.MacBook_Air_high =
        new iModel('MacBook_Air')
            .setModel('MGN63xx/A')
            .setColor('Silver')
            .setPerformance(MacBook_Air_high_Performance)
            .setGeneration(2020)
            .build();
}
import {iModel, ProductPerformance} from "../../../Model/DataModel.js";

const imacList = function () {
    const iMac_Performance = new ProductPerformance()
        .setCPU('M1 8CPU_8GPU')
        .setRAM('8G')
        .setScreenSize(24)
        .setStorage(256).build()

    this.iMac_low =
        new iModel('iMac')
            .setModel('iMac21,1')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1 7CPU_8GPU')
                    .setRAM('8G')
                    .setScreenSize(24)
                    .setStorage(256).build())
            .setGeneration(2020)
            .build();

    this.iMac_middle =
        new iModel('iMac')
            .setModel('iMac21,1')
            .setColor('Silver')
            .setPerformance(iMac_Performance)
            .setGeneration(2020)
            .build();
    this.iMac_high =
        new iModel('iMac')
            .setModel('iMac21,1')
            .setColor('Silver')
            .setPerformance(iMac_Performance)
            .setGeneration(2020)
            .build();
}

//테스트 코드
console.log(new imacList().iMac_low)


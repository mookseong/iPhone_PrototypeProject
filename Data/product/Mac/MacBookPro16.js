import {iModel, ProductPerformance} from "../../../Model/DataModel.js";

const Macbook16List = function () {
    this.MacBook_Pro16_low =
        new iModel('MacBook_Pro16')
            .setModel('MacBookPro18,1')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1 Pro_10CPU_14GPU')
                    .setRAM('16G')
                    .setScreenSize(16)
                    .setStorage(512).build())
            .setGeneration(2021)
            .build()
    this.MacBook_Pro16_middle =
        new iModel('MacBook_Pro16')
            .setModel('MacBookPro18,1')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1 Pro_10CPU_14GPU')
                    .setRAM('16G')
                    .setScreenSize(16)
                    .setStorage(1000).build())
            .setGeneration(2021)
            .build()
    this.MacBook_Pro16_high =
        new iModel('MacBook_Pro16')
            .setModel('MacBookPro18,1')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1 MAX')
                    .setRAM('32G')
                    .setScreenSize(16)
                    .setStorage(1000).build())
            .setGeneration(2021)
            .build()

}
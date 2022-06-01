import {iModel, ProductPerformance} from "../../../Model/DataModel.js";

const Macbook14List = function () {
    this.MacBook_Pro14 =
        new iModel('MacBook_Pro14')
            .setModel('MacBookPro18,3')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1 Pro_8CPU_14GPU')
                    .setRAM('16G')
                    .setScreenSize(14)
                    .setStorage(512).build())
            .setGeneration(2021)
            .build()
    this.MacBook_Pro14_high =
        new iModel('MacBook_Pro14')
            .setModel('MacBookPro18,3')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1 Pro_10CPU_16GPU')
                    .setRAM('16G')
                    .setScreenSize(16)
                    .setStorage(1000).build())
            .setGeneration(2021)
            .build()

}
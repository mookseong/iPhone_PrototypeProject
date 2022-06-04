import {iModel, ProductPerformance} from "../../../Model/DataModel.js";

const Macbook13List =function () {
    this.MacBook_Pro13 =
        new iModel('MacBook_Pro13')
            .setModel('MacBookPro17,1')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1')
                    .setRAM('8G')
                    .setScreenSize(13)
                    .setStorage(256)
                    .build())
            .setGeneration(2020)
            .build()

    this.MacBook_Pro13_high =
        new iModel('MacBook_Pro13')
            .setModel('MacBookPro17,1')
            .setColor('Silver')
            .setPerformance(
                new ProductPerformance()
                    .setCPU('M1')
                    .setRAM('8G')
                    .setScreenSize(13)
                    .setStorage(512)
                    .build())
            .setGeneration(2020)
            .build()

}
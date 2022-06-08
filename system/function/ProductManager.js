import {AirPodModel, iModel, ProductPerformanceModel, WatchModel} from "../../model/DataModel.js";

const iPhone_Performance = new ProductPerformanceModel()
    .setCPU('A15')
    .setRAM('6G')
    .setScreenSize(6.1)
    .setStorage(128).build();

const iPad_Performance = new ProductPerformanceModel()
    .setCPU('M1')
    .setRAM('8G')
    .setScreenSize(12.9)
    .setStorage(128)
    .build();

const iMac_Performance = new ProductPerformanceModel()
    .setCPU('M1 8CPU_8GPU')
    .setRAM('8G')
    .setScreenSize(24)
    .setStorage(256).build()

const MacBookAir_Performance = new ProductPerformanceModel()
    .setCPU('M1 8GPU')
    .setRAM('8G')
    .setScreenSize(13)
    .setStorage(512)
    .build();

export const getProduct = {
    Watch: function () {
        return WatchModel("Watch7").setModel("A1346").setGeneration(7).setColor('Silver').build();
    }, AirPod2: function () {
        return AirPodModel("AirPod2").setModel("A2032").setGeneration(2).build();
    }, AirPod3: function () {
        return AirPodModel("AirPod3").setModel("A2565").setGeneration(3).build();
    }, AirPod_Max: function () {
        return AirPodModel("AirPods Max").setModel("A2096").setGeneration(1).build();
    }, AirPod_Pro: function () {
        return AirPodModel("AirPod Pro").setModel("A2084").setGeneration(1).build();
    }, iPhone13: function () {
        return new iModel('iPhone13')
            .setModel('A2378')
            .setColor('Silver')
            .setPerformance(iPhone_Performance)
            .setGeneration(13).build();
    }, iPad_Pro: function () {
        return new iModel('12.9형 iPad Pro(5세대)')
            .setModel('A2378')
            .setColor('Space Gray')
            .setPerformance(iPad_Performance)
            .setGeneration(5)
            .build();
    }, iMac: function () {
        return new iModel('iMac')
            .setModel('iMac21,1')
            .setColor('Silver')
            .setPerformance(iMac_Performance)
            .setGeneration(2020)
            .build();
    }, MacBook_Air: function () {
        return new iModel('MacBook_Air')
            .setModel('MGN63xx/A')
            .setColor('Silver')
            .setPerformance(MacBookAir_Performance)
            .setGeneration(2020)
            .build();
    }
}

export const getProductOption = function () {

}

console.log(getProduct.iPhone13().Performance.CPU)
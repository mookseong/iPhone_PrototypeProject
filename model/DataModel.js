// 제품 모델(정보) 관한 Builder
export const iModel = function (Name) {
    let Model
    let Generation
    let Color
    let Performance
    
    return {
        setModel: function (model) {
            Model = model
            return this
        }, setGeneration: function (generation) {
            Generation = generation
            return this
        }, setColor: function (color) {
            Color = color
            return this
        }, setPerformance: function (performance) {
            Performance = performance
            return this
        }, build: function () {
            return {
                Name, Generation, Model, Color, Performance
            }
        }
    }
}
// 제품 스팩 관한 Builder
export const PerformanceModel = function () {
    let CPU;
    let RAM;
    let Storage;
    let ScreenSize;

    return {
        setCPU: function (cpu) {
            CPU = cpu
            return this
        }, setRAM: function (ram) {
            RAM = ram
            return this
        }, setStorage: function (storage) {
            Storage = storage
            return this
        }, setScreenSize: function (screenSize) {
            ScreenSize = screenSize
            return this
        }, build: function () {
            return {
                CPU, RAM, Storage, ScreenSize
            }
        }
    }
}

export const AirPodModel = function (Name) {
    let Model;
    let Generation
    let Color = 'White'

    return {
        setModel: function (model) {
            Model = model;
            return this;
        }, setGeneration: function (generation) {
            Generation = generation
            return this
        }, setColor: function (color) {
            Color = color
            return this
        }, build: function () {
            return {
                Name, Generation, Model, Color
            }
        }
    }
}

// 제품 모델(정보) 관한 Builder
export const iModel = function (name) {
    let _model
    let _generation
    let _color
    let _performance

    return {
        setModel: function (model) {
            _model = model
            return this
        }, setGeneration: function (generation) {
            _generation = generation
            return this
        }, setColor: function (color) {
            _color = color
            return this
        }, setPerformance: function (performance) {
            _performance = performance
            return this
        }, build: function () {
            return {
                Name: name, Generation: _generation, Model: _model, Color: _color, Performance: _performance
            }
        }
    }
}
// 제품 스팩 관한 Builder
export const PerformanceModel = function () {
    let _cpu;
    let _ram;
    let _storage;
    let _screenSize;

    return {
        setCPU: function (cpu) {
            _cpu = cpu
            return this
        }, setRAM: function (ram) {
            _ram = ram
            return this
        }, setStorage: function (storage) {
            _storage = storage
            return this
        }, setScreenSize: function (screenSize) {
            _screenSize = screenSize
            return this
        }, build: function () {
            return {
                CPU: _cpu, RAM: _ram, Storage: _storage, ScreenSize: _screenSize
            }
        }
    }
}

export const AirPodModel = function (name) {
    let _model;
    let _generation
    let _color = 'White'

    return {
        setModel: function (model) {
            _model = model;
            return this;
        }, setGeneration: function (generation) {
            _generation = generation
            return this
        }, setColor: function (color) {
            _color = color
            return this
        }, build: function () {
            return {
                Name: name, Generation: _generation, Model: _model, Color: _color
            }
        }
    }
}

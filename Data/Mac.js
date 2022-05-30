let MacBook16_Performance =
    new ProductPerformance().setCPU('M1Pro').setRAM('32G').setScreenSize(16.2).setStorage(1000)
let MacBook16 =
    new iModel('iPhone13')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(new ProductPerformance().setCPU('M1').setRAM('8G').setScreenSize(12.9).setStorage(128))
        .setGeneration(5)
        .build()

console.log(iPad_Pro.Performance.RAM)
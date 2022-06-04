export const Mac_Option = {
    MacProcess: function (Model) {
        console.log("시스템 온 칩(프로세서)선택하기");
        switch (Model) {
            case "pro14_low":
                console.log('1.Apple M1 Pro(8코어 CPU, 14코어 GPU, 16코어 Neural Engine)\t');
                break;
            case "pro14_16_high":
                console.log('1.Apple M1 Pro(10코어 CPU, 16코어 GPU, 16코어 Neural Engine)\t');
                break;
            case "mac_studio":
                console.log('1.Apple M1 Max(10코어 CPU, 24코어 GPU, 16코어 Neural Engine)\t');
                break;
            case "mac_pro":
                console.log('1.3.5GHz 8코어 Intel Xeon W 프로세서(최대 4.0GHz Turbo Boost)\t');
                break;
        }
    },
    MacRam: function (Model) {
        console.log("메모리 선택하기");
        switch (Model) {
            case "Ram_8_16":
                console.log('1.8G 램 옵션 \t2.16G 램 옵션)\n')
                break;
            case "Ram_16_32":
                console.log('1.16G 램 옵션 \t2.32G 램 옵션)\n')
                break;
            case "Ram_32_64":
                console.log('1.32G 램 옵션 \t2.64G 램 옵션)\n')
                break;
            case "mac_pro":
                console.log(
                    '1.32GB(4x8GB) DDR4 ECC \t2.48GB(6x8GB) DDR4 ECC\n')
                break;
        }
    },
    MacColor: function () {
        console.log('원하는 용량을 선택하세요.');
        console.log('1.128G \t2.256G "\n3.512G\t4.1Tb\n5. 2TB\n');
    },
    MacProVideo: function () {
        console.log('원하는 그래픽을 선택하세요.');
        console.log('1.Radeon Pro W5500X(8GB GDDR6 메모리) \t2.Radeon Pro W6600X(8GB GDDR6 메모리)\n');
    },
    MacStorage: function () {
        console.log('원하는 용량을 선택하세요.');
        console.log('1.128G \t2.256G "\n3.512G\t4.1Tb\n5. 2TB\n');
    },
    trade_in: function () {
        console.log('보상 판매할 iPhone이 있으신가요?\n');
    }
};



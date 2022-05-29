// 사용자에게 옵션을 입력받으면 class 의 프로퍼티 값을 바꾸고 해당되는 객체를 반환하도록
// 사용자가 Yes or No 로 답하는 plusCellular 어떻게 할지 생각해보기
class Mac {
    constructor(name, memory, storage) {
        this.name = name;
        this.memory = memory;
        this.storage = storage;
    }
}

class IMac extends Mac{
    constructor(name, memory, storage, color) {
        super(name, memory, storage);
        this.color = color;
    }
}

class MacPro extends Mac {
    constructor(name, memory, storage, processor) {
        super(name, memory, storage);
        this.processor = processor;
    }
}

var iMac24 = new IMac('iMac', 8, 256, 'red');
var macAir = new Mac('Air', 8, 256);
var macPro13 = new Mac('Pro13', 8, 256);
var macPro14 = new MacPro('Pro14', 16, 256, 'M1Pro');
var macPro16 = new MacPro('Pro16', 16, 256, 'M1Max');


class IPhone {
    constructor(name, color, storage) {
        this.name = name;
        this.color = color;
        this.storage = storage;
    }
}

var iPhone13Pro = new IPhone('13Pro', 'silver', 256);
var iPhone13 = new IPhone('iPhone13', 'silver', 256);
var iPhone13Mini = new IPhone('13mini', 'silver', 256);



// iPad에 plusCellular 처리
class IPad {
    constructor(name, color, storage) {
        this.name = name;
        this.color = color;
        this.storage = storage;
    }
}

class IPadPro extends IPad {
    constructor(name, color, storage, size) {
        super(name, color, storage);
        this.size = size;
    }
}

var iPadMiNi = new IPad('iPadMiNi', 'silver', 64);
var iPadPro11 = new IPadPro('iPadPro11', 'silver', 128, 11);


// AppleWatch에 plusCellular 처리. Series3은 해당 안 됨
class AppleWatch {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

var watch7 = new AppleWatch('watch7', 41);

class AirPods {
    constructor(name) {
        this.name = name;
    }
}

class AirPodsMax extends Airpods {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
    }
}

var airPods2 = new AirPods('airPods2');
var airPodsMax = new AirPodsMax('airPodsMax', 'red');



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

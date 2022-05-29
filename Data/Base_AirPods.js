class AirPods {
    constructor(name, model, generation, color) {
        this.name = name;
        this.model = model;
        this.generation = generation;
        this.color = function (){
            if (model === "Pro" || model === "pods")
                return  "흰색"
            else if (model === "Max")
                return color
        }
    }
}

const airPods2 = new AirPods('airPods2', "Pro", "2");
console.log(airPods2)
console.log(airPods2.color())


class AirPodsMax extends AirPods {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
    }
}
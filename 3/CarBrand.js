class CarBrand {
    constructor(brand, model, power, accelerationTime) {
        this.brand = brand;
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }

    runDrag(time) {
        return `${this.brand} ${this.model} runs drag for ${time.toFixed(1)} seconds`;
    }

    getWhoIsFaster(car) {
        const timeDifference = this.accelerationTime - car.accelerationTime;
        return `${this.brand} ${this.model} is faster for ${Math.abs(timeDifference).toFixed(1)} seconds`;
    }
}

class BugattiBrand extends CarBrand {
    constructor(model, power, accelerationTime, cost) {
        super('Bugatti', model, power, accelerationTime);
        this.cost = cost;
    }

    getIsExpensive() {
        return this.cost > 1;
    }
}

class LadaBrand extends CarBrand {
    constructor(model, power, accelerationTime, location) {
        super('Lada', model, power, accelerationTime);
        this.location = location;
    }

    getLocation() {
        return `${this.brand} ${this.model} is located in ${this.location}`;
    }
}
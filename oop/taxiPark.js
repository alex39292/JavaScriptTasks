class Car {
    constructor(options) {
        this.fuelConsumption = options.fuelConsumption
        this.cost = options.cost
        this.seats = 4
        this.year = options.year
    }
}

class EconomCar extends Car {
    constructor(options) {
        super(options)
    }
}

class BuisnessCar extends Car {
    constructor(options) {
        super(options)
        this.year = options.year > 2015 ? options.year : null
    }
}

class Minivan extends Car {
    constructor(options) {
        super(options)
        this.seats = options.seats
    }
}

class TaxiPark {
    constructor(cars) {
        this.cars = cars
    }

    set car(car) {
        this.cars.push(car)
    }

    totalCost() {
        let totalCost = 0
        for (let i = 0; i < this.cars.length; i++) {
            totalCost += this.cars[i].cost
        }
        return totalCost
    }

    sortByFuelConsumption() {
        this.cars.sort((a, b) => a.fuelConsumption > b.fuelConsumption ? 1 : -1)
        return this.cars
    }

    findCarByCost(cost) {
        return this.cars.filter(car => car.cost === cost)
    }

    findCarByFuelConsumption(fuelConsumption) {
        return this.cars.filter(car => car.fuelConsumption === fuelConsumption)
    }

    findCarByYear(year) {
        return this.cars.filter(car => car.year === year)
    }
}

const audi = new EconomCar({
    fuelConsumption : 7,
    cost : 5000,
    year : 2005
})

const bmw = new BuisnessCar({
    fuelConsumption : 6, 
    cost : 15000,
    year : 2020
})

const seat = new Minivan({
    fuelConsumption : 9, 
    cost : 19000,
    year : 2000,
    seats : 8
})

const park = new TaxiPark([bmw, seat, audi])
console.log("Total cost is", park.totalCost(), "\n",
            "Sorted", park.sortByFuelConsumption(), "\n",
            "By cost", park.findCarByCost(5000), "\n",
            "By year", park.findCarByYear(2000), "\n",
            "By fuel consumption", park.findCarByFuelConsumption(6))
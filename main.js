class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt () {
        this.food = this.food + 2 
    } 
    eat () {
        if (this.food < 1) {
            this.isHealthy = false
        } else {
            this.food = this.food - 1
        }
        
    }
}
let von = new Traveler('Von')
console.log(von)
von.hunt()
console.log(von)
von.eat()
console.log(von)
von.eat()
console.log(von)
von.eat()
console.log(von)
von.eat()
console.log(von)

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount () {
       return this.capacity - this.passengers.length 
    }
    join (Traveler) {
        if(this.getAvailableSeatCount() >=1) {
            this.passengers.push(Traveler)
        }
    }
    shouldQuarantine () {
        for (let i = 0; i < this.passengers.length; i++) {
            if(this.passengers[i].isHealthy === false) {
                return true;
            }
        }
        return false;
    }
    totalFood() {
        let total = 0
        for(let i = 0; i < this.passengers.length; i++) {
            total += this.passengers[i].food
        }
        return total
    }
}

let bus = new Wagon(12, 2);
console.log(bus);

let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)
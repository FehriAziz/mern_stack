class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
        console.log(`${this.name} attacks ${target.name} for ${this.power} damage!`);
        console.log(`${target.name} has ${target.resilience} resilience remaining.`);
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

// Create units
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Create effects
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Turn 1
console.log("Turn 1:");
console.log("Playing Hard Algorithm on Red Belt Ninja");
redBeltNinja.resilience += hardAlgorithm.magnitude;
console.log(`${redBeltNinja.name}'s resilience increased to ${redBeltNinja.resilience}`);

// Turn 2
console.log("\nTurn 2:");
console.log("Making an instance of Black Belt Ninja");
console.log("Playing Unhandled Promise Rejection on Red Belt Ninja");
redBeltNinja.resilience += unhandledPromiseRejection.magnitude;
console.log(`${redBeltNinja.name}'s resilience decreased to ${redBeltNinja.resilience}`);

// Turn 3
console.log("\nTurn 3:");
console.log("Playing Pair Programming on Red Belt Ninja");
redBeltNinja.power += pairProgramming.magnitude;
console.log(`${redBeltNinja.name}'s power increased to ${redBeltNinja.power}`);
console.log(`${redBeltNinja.name} attacks ${blackBeltNinja.name}`);
redBeltNinja.attack(blackBeltNinja);


//Classes

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

console.log('greeter' + greeter.greeting);


//Inheritance

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


//Public, private, and protected modifiers


//Public

class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`Public modifiers${this.name} moved ${distanceInMeters}m.`);
    }
}

let obj = new Animal('Dyno');
obj.move(10);


//Private
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let obj = new Animal("Cat").name;
console.log(`private modifier name ${obj}`);

//Readonly

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
console.log(`readonly modifier name ${dad.name}`);

'use strict';

class Animal {
    constructor(name, numLegs = 4) {
        this.name = name;
        this.numLegs = numLegs;
    }

    sayLegs() {
        console.log(this.name + " has " + this.numLegs + " legs");
    }
}

Animal.prototype.eat = function () {
    console.log(`${this.name} eat "nom nom nom"`); //added the new function at the dog
}
// sharick --> dog.prototype --> animal.prototype --> object.prototype --> null

class Dog extends Animal {
    constructor(name, numLegs) {
        super(name, numLegs);

    }
}

Dog.prototype.bork = function () {
    console.log(`${this.name} got woof`)
}
class CaBe extends Animal {  // cat and bear borks 
    constructor(name, numLegs) {
        super(name, numLegs);
    }
    bork(){
        console.log(`graaa`);
    }
}

class Cat extends CaBe {
    constructor(name, numLegs) {
        super(name, numLegs);
    }

}
class Bear extends CaBe {
    constructor(name, numLegs) {
        super(name, numLegs);

    }

}



let murzick = new Cat("murzick");
let sharick = new Dog("Sharick", "4");

console.log(murzick.bork(), sharick.eat(), sharick.bork());


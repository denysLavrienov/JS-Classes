class Salmon extends Animal{
    constructor(species, numberOfLegs, vegetarian){
        super(species, numberOfLegs, vegetarian);
    }

    canFly(){
        return false;
    }

    canRun(){
        return false;
    }

    canSwim(){
        return true;
    }

    eats(Animal){
        return true;
    }

}
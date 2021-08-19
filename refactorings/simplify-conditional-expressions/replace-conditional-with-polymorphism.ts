// Problem
// You have a conditional that performs various actions depending on object type or properties.

// Solution
// Create subclasses matching the branches of the conditional. In them, create a shared method and move code from the corresponding branch of the conditional to it. Then replace the conditional with the relevant method call. The result is that the proper implementation will be attained via polymorphism depending on the object class.

enum BirdType {
  European = 'European',
  African = 'African',
  NorwegianBlue = 'NorwegianBlue'
}
class Bird__OLD {
  getBaseSpeed(): number {
    return 50;
  }
  getSpeed(birdType: BirdType): number {
    switch (birdType) {
      case BirdType.European:
        return this.getBaseSpeed();
      case BirdType.African:
        return this.getBaseSpeed() * 10;
      case BirdType.NorwegianBlue:
        return this.getBaseSpeed() - 100;
    }
  }
}

abstract class Bird {
  abstract getSpeed(): number;
}

class African extends Bird {
  getSpeed(): number {
    return 150;
  }
}

class NorwegianBlue extends Bird {
  getSpeed(): number {
    return 500;
  }
}

let bird: Bird = new African();

bird.getSpeed();

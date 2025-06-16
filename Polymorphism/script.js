// Basic abstraction example

class Animal {
    speak() {
        console.log("Generic animal sounds");
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow!";
    }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.speak()); // Woof!
console.log(cat.speak()); // Meow!

const a = new Animal();
a.speak();
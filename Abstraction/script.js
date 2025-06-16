
class Shape {
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const c = new Circle(5);
console.log(c.area()); 

// Uncommenting the next line will throw an error:
// const s = new Shape();
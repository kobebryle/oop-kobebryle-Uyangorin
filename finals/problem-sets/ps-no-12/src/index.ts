class Shape {
    public length: number = 0;
    public width: number = 0;
    public height: number = 0;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
}

class Rectangle extends Shape {
    constructor(length: number, width: number, height: number) {
        super(length, width, height);
    }

    getArea(): number {
        return this.length * this.width;
    }

    getPerimeter(): number {
        return 2 * (this.length + this.width);
    }

    getVolume(): number {
        return this.length * this.width * this.height;
    }
}

class Square extends Shape {
    constructor(side: number) {
        super(side, side, side);
    }

    getArea(): number {
        return this.length * this.width;
    }

    getPerimeter(): number {
        return 4 * this.length;
    }

    getVolume(): number {
        return this.length * this.width * this.height;
    }
}
const rectangle = new Rectangle(1, 4, 3)
const square = new Square(4)

console.log("RECTANGLE \nArea:", rectangle.getArea())
console.log("Perimeter:", rectangle.getPerimeter())
console.log("Volume:", rectangle.getVolume())

console.log("\nSQUARE \nArea:", square.getArea())
console.log("Perimeter:", square.getPerimeter())
console.log("Volume:", square.getVolume())
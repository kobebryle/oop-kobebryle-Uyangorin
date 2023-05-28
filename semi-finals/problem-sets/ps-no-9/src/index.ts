
class Rectangle {
    private length: number
    private width: number
    private height: number
  
    constructor(length: number, width: number, height: number ) {
      this.length = length
      this.width = width
      this.height = height
    }
  
    calculateArea(): number {
      return this.length * this.width
    }
  
    calculatePerimeter(): number {
      return 2 * (this.length + this.width)
    }
  
    calculateVolume(): number {
      return this.length * this.width * this.height
    }
}
const rectangle= new Rectangle(4,6,8)
console.log("Area;",rectangle.calculateArea())
console.log("Perimeter:",rectangle.calculatePerimeter())
console.log("Volume:",rectangle.calculateVolume())

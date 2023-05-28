// function prompt(question: string, callback: Function): void {
//   const stdin = process.stdin,
//     stdout = process.stdout

//   stdin.resume()
//   stdout.write(question)

//   stdin.once('data', function (data): void {
//     callback(data.toString().trim())
//   })
// }
// create a program that accepts inputs and calculate the area of a triangle
//prompt('Enter Base:', function (inputBase: string): void {
// prompt('Enter Height:', function (inputHeight: string): void {
//const Base = +inputBase
//const Height = +inputHeight
//const area = (1 / 2) * Height * Base
//console.log(`The area is ${area}`)
// })
//})

// create a program that accepts a positive integer and display its decrements until 1
let counter = 5

while (counter >= 1) {
  console.log(counter)
  counter--
}

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}
// Seatwork No. 3

// Create a program that will accept a base integer and exponent integer and calculate its power using loops only.

// Example:

// Enter base: 2
// Enter exponent: 3

// 2^3 = 8

// -------

// Enter base: 0
// Enter exponent: 0

// 0^0 = 1
prompt('Enter Base: ', function (inputBase: string): void {
  prompt('Enter Exponent: ', function (inputExponent: string): void {
    const base = +inputBase
    const exponent = +inputExponent
    let factor = 1
    for (let i = 1; i <= exponent; i++) {
      factor = factor * base
    }
    console.log(factor)
  })
})

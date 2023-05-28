// Problem Set No. 3

// Create a program that will function like a calculator.
// It should accept a first input, operator and second input then calculate
// the result.

// Example:

// Enter first input: 2
// Select "+", "-", "*", "/" for operator: +
// Enter second input: 3
// 2 + 3 = 5

// -------------

// Enter first input: 2
// Select "+", "-", "*", "/" for operator: *
// Enter second input: 3
// // 2 * 3 = 6
function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}
prompt('Enter first input: ', function (inputA: string): void {
  prompt('Select "+", "-", "*", "/" for operator: ', function (
    inputB: string
  ): void {
    prompt('Enter second input: ', function (inputC: string): void {
      const a = +inputA
      const c = +inputC
      const operator = inputB
      if (operator === '+') {
        const result = a + c
        console.log(`${a} ${operator} ${c} = ${result}`)
      }
      if (operator === '-') {
        const result = a - c
        console.log(`${a} ${operator} ${c} = ${result}`)
      }
      if (operator === '*') {
        const result = a * c
        console.log(`${a} ${operator} ${c} = ${result}`)
      }
      if (operator === '/') {
        const result = a / c
        console.log(`${a} ${operator} ${c} = ${result}`)
      }
    })
  })
})

// prompt('Select "+", "-", "*", "/" for operator: ', function (
//   inputB: string
// ): void {
//   const operator = inputB
//   if (operator === '+') {
//     prompt('Enter first input: ', function (inputA: string): void {
//       prompt('Enter second input: ', function (inputC: string): void {
//         let a = +inputA
//         let c = +inputC
//         let z = a+c
//         console.log('The sum is', z)
//       })
//     })
//   }
//   if (operator === '-') {
//     prompt('Enter first input: ', function (inputA: string): void {
//       prompt('Enter second input: ', function (inputC: string): void {
//         let a = +inputA
//         let c = +inputC
//         let z = a-c
//         console.log('The difference is', z)
//         })
//     })
//   }
//   if (operator === '*') {
//     prompt('Enter first input: ', function (inputA: string): void {
//       prompt('Enter second input: ', function (inputC: string): void {
//         let a = +inputA
//         let c = +inputC
//         let z = a*c
//         console.log('The product is', z)
//         })
//     })
//   }
//   if (operator === '/') {
//     prompt('Enter first input: ', function (inputA: string): void {
//       prompt('Enter second input: ', function (inputC: string): void {
//         let a = +inputA
//         let c = +inputC
//         let z = a/c
//         console.log('The quotient is', z)
//         })
//     })
//   }
// })

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}
prompt('Enter first number: ', function (inputA: string): void {
  prompt('Enter second number: ', function (inputB: string): void {
    prompt('Enter third number: ', function (inputC: string): void {
      const a = +inputA
      const b = +inputB
      const c = +inputC

      const x = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
      const n = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
      console.log(x, n)
    })
  })
})

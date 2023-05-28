// Problem Set No. 4

// Create a program that will convert temperaturs to C, F, K and vice versa.

// Example:

// Select (C) for Celsius, (F) for Fahrenheit, (K) for Kelvin: C
// Enter temperature in Celsius: 25
// Convert to: (F) for Fahrenheit, (K) for Kelvin: K
// Temperature in Kelvin: 298

// -------------

// Select (C) for Celsius, (F) for Fahrenheit, (K) for Kelvin: F
// Enter temperature in Fahrenheit: 100
// Convert to: (C) for Celsius, (K) for Kelvin: K
// Temperature in Kelvin: 310.7778
// K = C+273.15
// C = (5/9)(F-32)
// F = (9/5*C)+32

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}
prompt(
  'Select (C) for Celsius, (F) for Fahrenheit, (K) for Kelvin: ',
  function (inputSelection: string): void {
    //Celsius
    if (inputSelection == 'C'||inputSelection == 'c') {
      prompt('Enter temperature in Celsius: ', function (
        inputTemperature: string
      ): void {
        prompt('Convert to: F) for Fahrenheit, (K) for Kelvin: ', function (
          inputConvert: string
        ): void {
          const temp = +inputTemperature
          const con = inputConvert

          if (con == 'F'||con == 'f') {
            const Fahrenheit = (9 / 5) * temp + 32
            console.log(`Temperature in Fahrenheit:${Fahrenheit}`)
          }
          if (con == 'K' ||con == 'k') {
            const Kelvin = temp + 273.15
            console.log(`Temperature in Kelvin:${Kelvin}`)
          } 
        })
      })
    }
    //Fahrenheit
    if (inputSelection == 'F'||inputSelection == 'f') {
      prompt('Enter temperature in Fahrenheit: ', function (
        inputTemperature: string
      ): void {
        prompt('Convert to: (C) for Celsius, (K) for Kelvin: ', function (
          inputConvert: string
        ): void {
          const temp = +inputTemperature
          const con = inputConvert

          if (con == 'C'||con == 'c') {
            const Celsius = (5 / 9) * (temp - 32)
            console.log(`Temperature in Celsius:${Celsius}`)
          }
          if (con == 'K'||con == 'k') {
            const celsius = (5 / 9) * (temp - 32)
            const Kelvin = celsius + 273.15
            console.log(`Temperature in Kelvin:${Kelvin}`)
          }          
        })
      })
    }
    //Kelvin
    if (inputSelection == 'K'||inputSelection == 'k') {
      prompt('Enter temperature in Kelvin: ', function (
        inputTemperature: string
      ): void {
        prompt('Convert to: (C) for Celsius, (F) for Fahrenheit: ', function (
          inputConvert: string
        ): void {
          const temp = +inputTemperature
          const con = inputConvert

          if (con == 'C'||con == 'c') {
            const Celsius = temp - 273.15
            console.log(`Temperature in Celsius:${Celsius}`)
          }
          if (con == 'F'||con == 'f') {
            const Fahrenheit = ((temp - 273.15) * 9) / 5 + 32
            console.log(`Temperature in Fahrenheit:${Fahrenheit}`)
          }
        })
      })
    }
  }
)

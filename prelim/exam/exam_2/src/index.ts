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
  'Select (C) for Celcius, (F) for Fahrenheit, (K) for Kelvin: ',
  function (InputTemperature: string): void {
    if (InputTemperature === 'C'|| InputTemperature === 'c') {
      prompt('Enter Temperature in Celcius: ', function (
        InputCelcius: string
      ): void {
        prompt('Convert to (F) Fahrenheit, (K) for Kelvin ', function (
          InputTemperature2: string
        ): void {
          if (InputTemperature2 === 'F' || InputTemperature2 === 'f') {
            const celcius = +InputCelcius
            const fahrenheitResult = celcius * 0.5556
            console.log(`The Temperature in Fahrenheit = ${fahrenheitResult}`)
          } else if (InputTemperature2 === 'K' || InputTemperature2 === 'k') {
            const celcius = +InputCelcius
            const kelvinResult = celcius + 273.15
            console.log(`The Temperature in Kelvin = ${kelvinResult}`)
          }
        })
      })
    } else if (InputTemperature === 'F' || InputTemperature === 'f') {
      prompt('Enter Temperature in Fahrenheit: ', function (
        InputFahrenheit: string
      ): void {
        prompt('Convert to (C) Celcius, (K) for Kelvin ', function (
          InputTemperature3: string
        ): void {
          if (InputTemperature3 === 'C' || InputTemperature3 === 'c') {
            const fahrenheit = +InputFahrenheit
            const celciusResult = (fahrenheit - 32) * 0.5556
            console.log(`The Temperature in Celcius = ${celciusResult}`)
          } else if (InputTemperature3 === 'K' || InputTemperature3 === 'k') {
            const fahrenheit = +InputFahrenheit
            const kelvinResult = (fahrenheit - 32) * 0.5556 + 273.15
            console.log(`The Temperature in Kelvin = ${kelvinResult}`)
          }
        })
      })
    } else if (InputTemperature === 'K' || InputTemperature === 'k') {
      prompt('Enter Temperature in Kelvin: ', function (
        InputKelvin: string
      ): void {
        prompt('Convert to (C) Celcius, (F) for Fahrenheit ', function (
          InputTemperature4: string
        ): void {
          if (InputTemperature4 === 'C' || InputTemperature4 === 'c') {
            const kelvin = +InputKelvin
            const celciusResult = kelvin - 273.15
            console.log(`The Temperature in Celcius = ${celciusResult}`)
          } else if (InputTemperature4 === 'F' || InputTemperature4 === 'f') {
            const kelvin = +InputKelvin
            const fahrenheitResult = (kelvin - 273.15) * 0.5556 + 32
            console.log(`The Temperature in Fahrenheit = ${fahrenheitResult}`)
          }
        })
      })
    } else {
      console.log('invalid input')
    }
  }
)
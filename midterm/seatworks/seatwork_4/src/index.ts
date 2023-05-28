// Seatwork No. 4

// Create a program that will calculate the sum of two arrays and store it in a new array

// Example:

// firstArray = [1, 2, 3, -4, 0]
// secondArray = [5 ,4 ,-2  -2, 1]


   
    
    let a = [1, 2, 3, -4, 0]
    let  b = [ 5 , 4, -2, -2, 1]
    let c = []

    if(a.length=b.length){
       for (let i = 0 ; i < a.length; i++){
          c[i] = a[i] + b[i]
       }
       console.log(c)
    }


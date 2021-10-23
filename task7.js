//new array which is going to contain 5 random numbers
const randomArray = []

//generates the 5 random numbers
for (let i = 0; i < 5; i++) {
    randomArray.push(getRandomNumber())
}

//function for a random number
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1) ) + 1 
  }

//Finds the biggest number in the new array
function maxArray() {
    return Math.max.apply(null, randomArray)
}

//Finds the smallest number in the new array
function minArray() {
    return Math.min.apply(null, randomArray)
}

//Counts the even numbers
function evenArray(randomArray) {
    const bool = []
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] % 2 === 0) {
            bool.push(true)
        }
    }
    return bool.length
}



const maxNumber = maxArray(randomArray)
console.log("The largest number in the array is " + maxNumber)

const minNumber = minArray(randomArray)
console.log("The smallest number in the array is " + minNumber)

const evenNumber = evenArray(randomArray)
console.log("There are " + evenNumber + " even numbers in the Array")





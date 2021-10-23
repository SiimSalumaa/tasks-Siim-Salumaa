function check(string) {
    if (!string) {
        return true
    } else {
        return false
    }
}
function toUpperCase(string) {
    if (!string) {
        return true
    } else {
        return string = string.charAt(0).toUpperCase() + string.slice(1);
    }
}

const row1 = ""
const row2 = "tere"
const row3 = "minu nimi on John"

console.log(check(row1))
console.log(check(row2))
console.log(check(row3))

console.log(toUpperCase(row1))
console.log(toUpperCase(row2))
console.log(toUpperCase(row3))

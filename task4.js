const colors = ["Red", "Green", "White", "Black"]
let dot, comma, plus = ""

for (let i = 0; i < colors.length; i++) {
    dot += colors[i]+"."
}

for (let i = 0; i < colors.length; i++) {
    comma += colors[i]+","
}

for (let i = 0; i < colors.length; i++) {
    plus += colors[i]+"+"
}

console.log(dot)
console.log(comma)
console.log(plus)
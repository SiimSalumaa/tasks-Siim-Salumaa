let name

function greet(name){
    if(name === undefined){
        return ('Hello, my friend.')
    } else if(name instanceof Array) {
        if(name.length >= 1){
                return ("Hello, " + name[0] + " and " + name[1])
        }
    }
    else{
        return ("Hello, " + name)
    }
}

console.log(greet(''))

console.log(greet(['Bob','June']))
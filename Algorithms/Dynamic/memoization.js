function addNumber(sum){
    const cache = {}
    return function(n){
        if (n in cache){
            return cache[n]
        }
        console.log("Long time adding", sum)
        cache[n] = n + sum
        return cache[n]
    }
}

let add50 = addNumber(50)

console.log(add50(19))
console.log(add50(19))
function memoize(){
    const cache = {}
    return function noname(n){
        if (n in cache) {
            return cache[n]
        } else if(n<2){
            return n
        }
        console.log("LONG");
        cache[n] = noname(n-1) + noname(n-2)

        if (n == 10) 
            console.log(cache)

        return cache[n] 
    }
}

fun = memoize()
num = 10
fun(num)
fun(num)
fun(num)

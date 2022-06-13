let hi = "My name is Jean Carlos"

function reverse(str){

    if (typeof(str) != "string") {
        console.log(str, "is not a string")
        return 
    }
    let reversed = ""
    let arr = str.split("")

    for (let i = arr.length - 1; i > -1; i--) {
       reversed += arr[i]
       
    }

    console.log(reversed)   
    
}

reverse(hi)
reverse(23)
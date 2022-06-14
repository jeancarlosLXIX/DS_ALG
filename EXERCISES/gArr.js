//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const array1 = [2,5,1,2,3,5,1,2,4]
const array2 = [2,1,1,2,3,5,1,2,4]
const array3 = [2,3,4,5]

function firstRecurringCharacter(input){
    obj = {}
    for (let i = 0; i < input.length; i++) {
       value = input[i]
        if (obj.hasOwnProperty(value)){
            console.log(value)
            return value
        } else{
            obj[value] = true
        }     
    }
    console.log("All numbers are differents")
}

firstRecurringCharacter(array1)
firstRecurringCharacter(array2)
firstRecurringCharacter(array3)
firstRecurringCharacter([2,5,5,2,3,5,1,2,4])
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
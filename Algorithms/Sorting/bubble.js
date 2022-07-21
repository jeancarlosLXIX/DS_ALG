const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0];

function bubbleSort(array) {
    let temp = 0
    const max = numbers.length
    for(let i = 0; i< max; i++){
        
     for(let j = i+1; j< max;j++){
         if(numbers[i]> numbers[j]){
             temp =  numbers[i]
             numbers[i] = numbers[j]
             numbers[j] = temp
         }
     }   
     
    }
}

bubbleSort(numbers);
console.log(numbers);
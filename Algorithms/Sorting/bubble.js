const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0];

function bubbleSort(array) {
    let temp = 0
    const max = array.length
    for(let i = 0; i< max; i++){
        
     for(let j = i+1; j< max;j++){
         if(array[i]> array[j]){
             temp =  array[i]
             array[i] = array[j]
             array[j] = temp
         }
     }   
     
    }
}

bubbleSort(numbers);
console.log(numbers);
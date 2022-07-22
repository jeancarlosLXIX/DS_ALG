const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0];

function selection(array) {
    const max = array.length
    for(let i = 0; i< max; i++){
        let min = i
        const temp = array[i]
     for(let j = i+1; j< max;j++){
         if(array[j] < array[min]){
             min = j
         }
     } 
     array[i] = array[min]
     array[min] = temp  
     
    }
}

selection(numbers);
console.log(numbers);
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0];
const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0];

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

function performaceSensitiveFunc(title="No title",func, arguments) {
	const start = Date.now();
	func(arguments)
	const duration = Date.now() - start;
	// report duration

    console.log(`Duration of ${title}: ${duration}s`)
}

performaceSensitiveFunc("Selection sort",selection,numbers)
performaceSensitiveFunc("Bubble sort",bubbleSort,numbers2)
// performaceSensitiveFunc("Selection algorithm",selection,numbers)
console.log(numbers);
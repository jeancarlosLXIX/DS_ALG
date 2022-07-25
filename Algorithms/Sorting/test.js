const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0,33,22,21,23,24,25,265];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0,33,22,21,23,24,25,265];
const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0,33,22,21,23,24,25,265];
const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 87, 283, 4, 0,33,22,21,23,24,25,265];

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


function insertion(array) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
      }
  }

function performaceSensitiveFunc(title="No title",func, arguments) {
	console.time(`${title}`);
  func(arguments)
  console.timeEnd(`${title}`);
}

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

performaceSensitiveFunc("Selection sort",selection,numbers)
performaceSensitiveFunc("Insertion sort",insertion,numbers3)
performaceSensitiveFunc("Merge sort",mergeSort,numbers4)
performaceSensitiveFunc("Bubble sort",bubbleSort,numbers2)
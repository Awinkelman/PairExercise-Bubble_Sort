


function swap(idx, arr){ //swap(0, [3,2])
    //take i and array
    //
    let temp = arr[idx] //3
    arr[idx]= arr[idx+1] 
    arr[idx+1]=temp
    console.log(arr);
    return arr; //[2,3]
}

function bubbleSort (array) {
    // let result = []
    let swapOccur = false

    //if array.length is 0 or 1, return array

   if(array.length === 0 || array.length === 1){
        return array
    } 
    //otherwise, loop through array
    let n = array.length
    while(n){

        for(let i = 0; i < array.length-1; i++){
           
            //compare i to i + 1 (3 > 2) = (i > i +1)
            if(array[i] > array[i+1]){
                //swap takes i, arr
                swap(i, array)
            console.log(array);
                //switch swapOccur to true
                swapOccur = true
            }
        
        }
        n--;
    }
    return array
}

// function bubbleSort (arr) {
//     let temp = []
//     if(arr.length === 0 || arr.length === 1){
//         return arr
//     }
//     for( let i = 0; i < arr.length-1; ++i){
//         let elem1 = arr[i]
//         let elem2 = arr[i+1]
//         temp.push(elem1, elem2)
//         console.log(temp);
//         if(elem1 < elem2){
//             temp.shift(elem1)
//         }
//     }
//     return temp
// }  



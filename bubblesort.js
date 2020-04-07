
function swap (e1, e2){
    if(e1 > e2){
        return e2
    }else {
        return e1
    }
}

function bubbleSort (array) {
    let result = []
    if(array.length === 0 || array.length === 1){
        return array
    }

    for(let i = 0; i < array.length; i++){
        let e = array[i]
       for(let j= i+1; j < array.length-i-1; j++){
           if(array[i] > array[j]){
               result.push(array[j])
           }
           console.log('array[i]', array[i])
           console.log('array[j]', array[j])
            result.push(swap(e, array[j]))
       }
    }

    return result
}


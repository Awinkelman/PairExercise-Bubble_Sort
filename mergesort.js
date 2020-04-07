function split (arr){
    let firstHalf = []
    let secondHalf = []

    let len = Math.floor(arr.length/2)

    firstHalf = arr.slice(0, len)
    secondHalf = arr.slice(len)

    return [firstHalf, secondHalf]
}


function merge (arr1, arr2) {
    return arr1.concat(arr2)
}

//[2, 4, 5, 7, 1] === [[2], [4], [5], [7], [1]]
function mergeSort (arr) {

    let result = []
    ///base case
    if(arr.length === 1 || arr.length === 0){
        return arr
    }

    for (let i = 0; i < arr.length; i++){
        let e = arr[i]
        if(Array.isArray(e)){
            result.push(e)
        }else{
            result.push([e])
        }
    }
    return result
}
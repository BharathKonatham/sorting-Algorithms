// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function quickSort(arr){
    
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    for(var i = 0 ; i < arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([-6,-3,-1,3,5,6,7,8]))
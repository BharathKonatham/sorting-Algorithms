function bubleSort(array){
    let swapped 
    do{
        swapped = false
        for (i=0;i<array.length-1;i++){
            
            if(array[i] > array[i+1]){
                let swapper = array[i]
                array[i] = array[i+1]
                array[i+1] = swapper
                swapped= true
            }
            console.log(array,array.length)
        }
    }while(swapped)
    return array
}

console.log(bubleSort([0,-1,-10,1,4,5,3,6,2]))
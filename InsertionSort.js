function insertionSort(array){
    
   
    for(let i=1;i < array.length;i++){
        let j = i-1;
        let Num = array[i]
        while(j>=0 && array[j]>Num){
            
         array[j+1] = array[j]    
         j = j-1    
        }
        array[j+1] = Num
        
    }
     
     return array
 }
 
 console.log(insertionSort([-6,20,8,-2,4,-1]))
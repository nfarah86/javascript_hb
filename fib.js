var fibonacciSet = function (numMax){
    if (numMax > 1){
        fibList = [1]
        currentFib =1
        
    while (currentFib < numMax){
        fibList.push(currentFib)
        currentFib = fibList[fibList.length-1]+ fibList[fibList.length -2]
   
    }
    }

// console.log(fibList);
  return fibList;    
}    

var filter = function (arrayNew){
    
    var sum = 0
    var arrayLength = arrayNew.length
    for (x =0; x < arrayLength; x++){
        var value = arrayNew[x]
        
        if (value % 2 ===0){
            sum = value + sum
            // console.log(arrayLength)
            // console.log(arrayNew)
            // console.log(arrayNew[x])
            // console.log(sum)

        }
    }  


return sum;
}

filter(fibonacciSet(20));


function mergeSort(arr){
   //base case
   if (arr.length === 1){ return arr }

   //find the middle index of array
   const midIndex = Math.floor(arr.length/2)

   //split array to two
   const leftArr = mergeSort(arr.slice(0,midIndex))
   const rightArr = mergeSort(arr.slice(midIndex))

   //merge two array by calling mergehandler function
   return mergehandler(leftArr, rightArr)
}

function mergehandler(leftArr, rightArr){
    let sortedArr = [];

    //merge until both left and right array become 0 element
    while (leftArr.length > 0 && rightArr.length > 0){
        //check which side larger
        if (leftArr[0] > rightArr[0]){
            //take the smaller element and push to sorted array
            sortedArr.push(rightArr.shift())
        } else {
            sortedArr.push(leftArr.shift())
        }
    }
    
    return [...sortedArr, ...leftArr, ...rightArr]
}
let sampleArr = [2,4,5,1,3,8,6,7]
console.log(mergeSort(sampleArr))
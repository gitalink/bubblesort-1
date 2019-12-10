function split(wholeArray){
  const middle=Math.floor(wholeArray.length/2);
  const firstHalf=wholeArray.slice(0, middle)
  const secondHalf=wholeArray.slice(middle)
  // console.log('FIRST HALF', firstHalf)
  // console.log('SECOND HALF', secondHalf)
  return [firstHalf, secondHalf]
}

function merge(sortedArr1, sortedArr2) {
  if (sortedArr1.length > sortedArr2.length) {
    arr1 = sortedArr1;
    arr2 = sortedArr2;
  }
  else {
    arr1 = sortedArr2;
    arr2 = sortedArr1;
  }

  const mergedArr = [] ;
  let k = 0;
    for (i=0; i<arr1.length; i++) {
      let arr1Element = arr1[i]
      for (j=k; j<arr2.length; j++) {
        let arr2Element = arr2[j]
        if (arr1Element > arr2Element) {
          mergedArr.push(arr2Element)
          k++;
        }
        else {
          break;
        }
      }
      mergedArr.push(arr1Element)
    }
    // console.log('   Merged Arr',mergedArr)
  return mergedArr
}

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  const splitArr = split(array)
  let arr1=mergeSort(splitArr[0])
  let arr2=mergeSort(splitArr[1])
  console.log('   SplitArray1',arr1)
  console.log('   SplitArray2',arr2)
  mergedArray=merge(arr1,arr2)
  console.log('   Merged Arr',mergedArray)
  return mergedArray

}


// function merge2(arr1, arr2) {
//   const mergedArr = [] ;

//   while (arr1.length && arr2.length) {
//     if(arr1[0] < arr2[0]) {
//       mergedArr.push(arr1.pop())
//     }
//     else if (arr1[0] > arr2[0]) {
//       mergedArr.push(arr2.shift())
//     }
//   }

//   return mergedArr
// }

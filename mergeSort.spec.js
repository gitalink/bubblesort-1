/* eslint-env jasmine */

describe('Split Array function ', function(){
  it('is able to split an array into two halves', function(){
    const array=[1,2,4,5];
    const splitArray=split(array);
    expect(splitArray[0].length).toEqual(2);
    expect(splitArray[1].length).toEqual(2);
  })
})

describe('Merge array function', function() {
  it ('is able to merge two sorted arrays into one sorted array', function() {
    const sortedArr1 = [2, 3, 6];
    const sortedArr2 = [1, 4, 5];



    expect(merge(sortedArr1, sortedArr2)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('Merge sort function', function() {
  it ('is sorts unsorted array', function() {
    const array=[2,3,4,5,1];
    expect(mergeSort(array)).toEqual([1, 2, 3, 4, 5])
  })
})

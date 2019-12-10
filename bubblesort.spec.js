/* eslint-env jasmine */

describe('Bubble Sort', function(){
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough()
  });

  it('compares exactly 10 times', function(){
    const array = [2,3,1,5,4]
    bubbleSort(array)
    expect(window.swap.calls.count()).toEqual(10)
  })

  it('handles an empty array', function(){
    expect( window.bubbleSort([]) ).toEqual( [] );
  });

  it('handles already sorted array', function(){
    const array = [1,2,3,4,5]
    const sortedArray = bubbleSort(array)
    expect(sortedArray).toEqual(array)
  });

  it('handles not sorted array', function(){
    const sortedGivingArray = [1,2,3,4,5]
    const array = [2,3,1,5,4]
    const sortedArray = bubbleSort(array)
    expect(sortedArray).toEqual(sortedGivingArray)
  });

  it('handles single item array', function(){
    const array = [1]
    const sortedArray = bubbleSort(array)
    expect(sortedArray).toEqual(array)
  });
});

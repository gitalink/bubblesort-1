/* eslint-env jasmine */

describe('Split Array function ', function(){
  it('is able to split an array into two halves', function(){
    const array=[2,3,4,5,1];
    const splitArray=split(array);
    expect(splitArray[0].length).toEqual(2);
    expect(splitArray[1].length).toEqual(3);
  })
})

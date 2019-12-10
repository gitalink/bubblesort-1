function split(wholeArray){
  const middle=Math.floor(wholeArray.length/2);
  const firstHalf=wholeArray.slice(0, middle)
  const secondHalf=wholeArray.slice(middle)
  return [firstHalf, secondHalf]
}

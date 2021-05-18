const reverseArr = (arr:any[]) => {
  const newArr = [];

  for(const item of arr) {
    newArr.unshift(item);
  }

  return newArr
}

//move these to spec file and run w/ jest
console.log(reverseArr([5,4,3,2,1]))
console.log(reverseArr(['a','b','c','d','e']))
 
//a good way to do this would be to implement merge sort (in reverse) but lets just do bubble since we will use short test arrays (though i really should practice implementing merge sort)

const reverseArrInPlace = (arr:any[]) => {
  for(let i = 0; i<arr.length; i++) {
    for(let j=0; j< arr.length-i-1; j++) {
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
  }

}

const arr = [5,4,3,2,1]
//move these to spec file and run w/ jest
reverseArrInPlace(arr)
console.log(arr)

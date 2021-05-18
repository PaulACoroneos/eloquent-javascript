
const range = (start: number, stop: number, step = 1) => {
  const arr = [];
  if( start < stop) {
    for(let i = start; i<=stop; i+=step) {
      arr.push(i)
    }
  }
  else {
    for(let i = start; i>=stop; i+=step) {
      arr.push(i)
    }
  }
  return arr;
}

//tests for now (most to spec file soon)
console.log(range(1,10))
console.log(range(1,10,2))
console.log(range(5,1,-1))
console.log(range(5,1,-2))
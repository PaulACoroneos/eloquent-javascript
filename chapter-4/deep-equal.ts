const deepEqual = (a: any, b: any) => {
  // base cases
  if (a === null && b === null) return false;
  if (typeof a !== 'object' && typeof b !== 'object') return a === b;
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  //else we need to perform a deep compare
  for(const keyA in a) {
    for(const keyB in b) {
      if (!deepEqual(a[keyA], b[keyB]))
        return false;
    }
  }

  return true;

}

console.log('deepEqual', deepEqual(1, 2));
console.log('deepEqual', deepEqual(1, 1));
console.log('deepEqual', deepEqual({ a: 1 }, { a: 1 }));
console.log('deepEqual', deepEqual({ a: 1 }, { a: 2 }));
console.log('deepEqual', deepEqual({ a: { a: 1 } }, { a: { a: 1 } }));
console.log('deepEqual', deepEqual({ a: { a: 1 } }, { a: { a: 2 } }));
console.log('deepEqual', deepEqual({ a: { a: 1 } }, { a: 1 }));
// export const countBs = (str:string) => {
//   let count = 0;
//   for(const char of str) {
//     if (char === 'B')
//     count++;
//   }
//   return count;
// }

export const countChar = (str:string,targetChar:string) => {
  let count = 0;
  for(const char of str) {
    if (char === targetChar)
    count++;
  }
  return count;
}

export const countBs = (str:string) => {
  return countChar(str,'B');
}
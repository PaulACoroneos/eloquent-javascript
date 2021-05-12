export const isEven = (num:number) => {
  //base cases
  if (num === 0) return true;
  else if (Math.abs(num) === 1) return false;

  //recurse
  isEven(num-2);
}
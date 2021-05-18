const arrayToList = (arr: number[]) => {
  let list:any = null;
  arr.forEach(el => {
    list = {value:el, rest:list}
  })
  return list;
};

const listToArray = (list: any) => {
  const arr = [];
  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
};

const prepend = (val:any,list:any) => {
  return {value:val,rest:list}
};
const nth = (list:any, idx:number): number | undefined => {
  if (!list || idx === 0) return list?.value;
  return nth(list?.rest,idx-=1);
};

const mockList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
const mockArr = [1, 2, 3];

console.log('listToArr',listToArray(mockList));
console.log('arrToList', arrayToList(mockArr));
console.log('prepend',prepend(4,mockList))
console.log('nth',nth(mockList,-1));
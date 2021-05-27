export class Group {
  group: number[];
  constructor(group = []) {
      this.group = group;
  }

  add(val: number) {
      if (!this.has(val))
          this.group.push(val);
  }

  delete(val: number) {
      const location = this.group.indexOf(val);
      if (location > -1) {
          return this.group.splice(location, 1)
      }
      return undefined;
  }
  has(val: number) {
      return this.group.includes(val)
  }

  static from(arr: number[]) {
      let group = new Group();
      arr.forEach(num => 
          group.add(num)
      )
      return group;
  }
}

let group = new Group();

group.add(1)
console.log(group.has(1))
group.delete(1)
console.log(group.has(1))

group = Group.from([1,2,3])
console.log(group.has(1));
console.log(group.has(2));
console.log(group.has(3));
console.log(group.group);

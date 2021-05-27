class Group {
  group: number[];
  constructor(group: number[] = []) {
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

  [Symbol.iterator]() {
      return new GroupIterator(this);
  }
}

// let group = new Group();

// group.add(1)
// console.log(group.has(1))
// group.delete(1)
// console.log(group.has(1))

// group = Group.from([1,2,3])
// console.log(group.has(1));
// console.log(group.has(2));
// console.log(group.has(3));
// console.log(group.group);

class GroupIterator {
  group: Group;
  position: number;
  constructor(group: Group) {
      this.group = group;
      this.position = 0
  }
  next() {
      const iteree = { value: this.group.group[this.position], done: this.position === this.group.group.length }
      this.position++;
      return iteree;
  }
}

for (let val of Group.from([1, 2, 3])) {
  console.log(val)
}

class Vec {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  plus(vector: Vec) {
    return new Vec(vector.x + this.x, vector.y + this.y)
  }

  minus(vector: Vec) {
    return new Vec(vector.x - this.x, vector.y - this.y)
  }

  get length() {
    return Math.sqrt(Math.pow(this.y - 0, 2) + Math.pow(this.x - 0, 2))
  }
}

let vector = new Vec(1,1);

console.log(vector.plus(new Vec(1,2)))
console.log(vector.plus(new Vec(2,2)))
console.log(vector.length)
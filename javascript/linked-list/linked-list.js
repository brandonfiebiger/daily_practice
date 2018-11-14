export default class LinkedList {
  constructor() {
    this.list = [];
  }
  push(num) {
    this.list[this.list.length] = num;
  }

  pop() {
    let newArray = [];
    let returnNumber;
    for (let i = 0; i < this.list.length; i++) {
      if (i !== this.list.length - 1) {
        newArray.push(this.list[i])
      } else {
        returnNumber = this.list[i];
      }
    }
    this.list = newArray;
    return parseInt(returnNumber);
  }

  shift() {
    let newArray = [];
    let returnNumber = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (i != 0) {
        newArray.push(this.list[i]);
      }
    }
    this.list = newArray;
    return returnNumber;
  }

  unshift(num) {
    let newArray = [num];
    for (let i = 0; i < this.list.length; i++) {
      newArray.push(this.list[i]);
    }
    this.list = newArray;
  }

  count() {
    return this.list.length;
  }

  delete(num) {
    let newArray = [];
    for (let i = 0; i < this.list.length; i++) {
      if (!this.list.includes(num)) {
        return
      } else if (this.list[i] !== num) {
        newArray.push(this.list[i])
      }
    }
    this.list = newArray;
  }
}
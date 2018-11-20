export default class List {
  constructor(list) {
    this.values = list || [];
  }

  append(list) {
    let newList = [...this.values];
    for (let i = 0; i < list.values.length; i++) {
      newList.push(list.values[i]);
    }
    return new List(newList);
  }

  concat(listOfLists) {
    let newList = [...this.values];
    listOfLists.values.forEach(value => {
      value.values.forEach(num => {
        newList.push(num);
      })
    })
    return new List(newList);
  }

  filter(callback) {
    let newList = [];
    const { values } = this;
    values.forEach(value => {
    let check = callback(value);
    check ? newList.push(value) : ''
    })
    return new List(newList);
  }

  length() {
    return this.values.length;
  }

  map(callback) {
    let newList = [];
    for (const value of this.values) {
      newList.push(callback(value));
    }
    return new List(newList);
  }

  foldl(callback, initialVal) {
    let acc = initialVal;
    for(const el of this.values) {
      acc = callback(acc, el)
    }
    return acc
  }

  foldr(callback, initialVal) {
    let acc = initialVal;
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = (callback(acc, this.values[i]));
    }
    return acc;
  }

  reverse() {
    let newArray = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      newArray.push(this.values[i]);
    }
    return new List(newArray);
  }
}
export default class School {
  constructor() {
    this.database = {}
    this.students = {}
  }
  
  roster() {
    let db = this.database
    Object.keys(db).forEach(arr => {
      db[arr].forEach(el => {
        if(!this.students[arr].includes(el)) {
          db[arr].pop();
        }
      })
    })
    return db;
  }

  add(name, num) {
    if (!this.database[num]) {
      this.database[num] = [name];
      this.students[num] = [name];
    } else {
      this.database[num].push(name);
      this.students[num].push(name);
    }
    this.database[num].sort();
    this.students[num].sort();
  }

  grade(num) {
    return this.database[num] || [];
  }
}
function deepClone(obj) {
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      let value = obj[key];
      clone[key] = (value instanceof Object) ? deepClone(value) : value;
    }
    return clone;
  }

let object = {a: 1, b: 2, c: {d: 3}, abc: "home"};

console.log(object["c"])

console.log(deepClone(object))
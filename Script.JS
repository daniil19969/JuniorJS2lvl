//1 задание
let obj = {
  John: 80,
  Ann: 60,
  title: "weight",
};

function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 4;
    }
  }
}
multiplyNumeric(obj);
let json1 = JSON.stringify(obj);
alert("1 задание: "+json1);

//2 задание
let calculator = {
  read() {
    this.a = +prompt("Введите 1 число: ", "");
    this.b = +prompt("Введите 2 число: ", "");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert("2 задание: Сумма: "+calculator.sum());
alert("2 задание: Произведение: "+calculator.mul());

//3 задание

let user = {
  name: "Василий Иванович",
  age: 35,
};
let json = JSON.parse(JSON.stringify(user));
console.log(json);

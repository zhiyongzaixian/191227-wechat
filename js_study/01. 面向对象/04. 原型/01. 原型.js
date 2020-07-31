
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.love = function () {
  console.log('play basketball');
}
let person1 = new Person('curry', 33)
let person2 = new Person('wade', 38)
person1.love();



Child.prototype = new Person();
Child.prototype.constructor = Child;

function Child(name, age, sex) {
  // this.name = name;
  // this.age = age;
  Person.apply(this, [name,age]);
  this.sex = sex;
}

let child1 = new Child('xiaoming', 18, '男');
console.log(child1);
// child1.love();

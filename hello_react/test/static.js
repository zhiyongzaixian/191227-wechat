class Person {
  
  // 实例身上有什么属性取决于constructor
  constructor(name, age){
    this.name = name;
    this.age = age;
    // this.play = function () {
    //   console.log('my self play() 1111');
    // }
  }
  // 类的一般方法， 这些方法统一放在实例的原型对象上
  play(){
    console.log('play basketball 2222');
  }
  // static 修饰符，该方法属性类对象的方法，需要通过类对象访问该方法，而不是给实例使用
  static love(){
    console.log('song ');
  }
}


let person1 = new Person('wade', 39)
let person2 = new Person('curry', 32)
console.log(person1);
console.log(person2);
person1.play();

// person1.love();

Person.love()

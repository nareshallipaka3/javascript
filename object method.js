// var person;
// person={name:'naresh',age:25,
// changename:function sri(a){
//     this.name=a;
// }};
// console.log("before method call")
// console.log(person.name)
// person.changename("sathvik")
// console.log("after method call")
// console.log(person.name)


// inside constructor function
// function person(name,age)
// {this.name=name;
// this.age=age;
// this.changename=function person(name)
// {this.name=name;
// }
// }
// var p=new person('vijay',18);
// console.log(p.name);
// p.changename("srinithya");
// console.log(p.name);


// // outside constructor function

// function person(name,age)
// {
//     this.name=name;
//     this.age=age;
//     this.changename=cn;
// }
// function cn(name)
// {
//     this.name=name;
// }
// var p1=new person('ram',30);
// console.log(p1.name);
// console.log(p1.age);
// p1.changename('laxman')
// console.log(p1.name)



// function person(name,age)
// {
//     this.name=name;
//     this.age=age;
//     this.yob=yob;
// }
// function yob(age)
// {
//     return 2022-this.age;
// }
// var n=new person("bunny",20);
// console.log(n.name);
// console.log(n.yob());
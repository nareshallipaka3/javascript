// var a;
// a={name:'john',age:25};
// console.log(a.name) 
// console.log(a.age)
// console.log(a.gender)

function person(name,age,gender)
{
this.name=name;
this.age=age;
this.gender=gender;
}
var n= new person("ram",25,'male');
console.log(n.name);
console.log(n.age);
console.log(n.gender);

for(let key in person)
{console.log(key);}

{
    console.log(person[key]);
}




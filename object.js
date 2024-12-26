
// it collection of properties and methods
const person1={
    employee_name:"vicky",
    employee_id:80,
    ispresent:true,
    sayhello:function(){
        console.log(`this is${this.employee_name}he is an employee`);
  },

};
person1.sayhello();
//
const person3={
    employee_name:"vicky",
    employee_id:80,
    ispresent:true,
};
const person2={
    employee_name:"jai",
    employee_id:50,
    ispresent:false,

};
console.log(person2.employee_name);
console.log(person3.ispresent);
//

function Details (employee_name,employee_id,ispresent)
{
(this.employee_name=employee_name),
(this.employee_id=employee_id),
(this.ispresent=ispresent);
}
const person4 =new Details("vicky",50,true);
const person5 =new Details("jai",90,true);
const person6 =new Details("depak",80,true);
console.log(person4.employee_id);
console.log(person5.employee_id);
console.log(person6.employee_id);










let array=[1,2,3,4,5,6,7,8]
array.push(6);
console.log(array);
//
array.pop();
console.log(array);
//
array.shift();
console.log(array);
//
array.unshift(9);
console.log(array);
//
let a=array.length;
console.log(a);
//
let array1=[1,2,3,4,5]
array1.splice(2,3,8)
console.log(array1);
//
let b=array.slice(1,5)
console.log(b);
//
let fruits=["apple","banana","orange"];
let veg=["carrat","pottato"];
let basket=fruits.concat(veg);
console.log(basket);
//
console.log(fruits.indexOf("apple"));
//
console.log(fruits.includes("apple"));
//
let arrays=[45,55,66,99];
let a1=arrays.map((b)=>{
    console.log(b);
    return b+1;
})
console.log(a1);
//
let array2=[10,20,30,40,50,60,3,4,5];
let a2=array2.filter((value)=>{
    return value<10;
})
console.log(a2);
//
let array3=[2,3,4,5,6]
let a3=array3.reduce((c,d)=>{
    return c+d
})
console.log(a3);







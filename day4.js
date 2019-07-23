let num=[0,1,2,3,4,5,6,7,8,9];
console.log(num[4]);
num.push(10,11,12,13,14,15,16,17,18,19,20);
console.log(num);
num.pop();
console.log(num);
num.shift();
console.log(num);
num.unshift(23);
console.log(num);
console.log(num.indexOf(17));
delete num[11];
console.log(num);
num.splice(4,5);
console.log(num);
let b=num.map(mul);
function mul(value,index){
   return value*index;
}
console.log(b);
let d=num.splice(7,4);
console.log(d);
let c=b.filter(fun);
function fun(value){
    return value>30;
}
console.log(c);
num=num.concat(b).concat(c);
console.log(num);
console.log("hekko");
console.log(2 == "2");//true as "2" is taken as string 
console.log(2 && 7); //7 as 'and' operation  since both r true the last  true value 7
console.log(0 && 7); //0 as 'and' operation  since 1st one is fal it is fal i,e 0
console.log(7 && 0); //0 as 'and' operation  since 2nd one is fal it is fal i,e 0
console.log(2 === "2");//false as it compares datatypes
console.log(2 || 5);//2 as 'or' since any one t ans t so it will display 1st value
console.log(0 || 6);//6 as 'or' since any one t ans t and that 1st true value 
console.log(0 || 0);//0 as 'or' since both are false
console.log(4 | 0);//4 as 100 'or' 000 is 100 since one is true it is 1st true value >it is bitwise
console.log(3 & 8);//0 as 0011 'and' 1000 is  0000 if any bit in a

var a= "12";
var a= "ab";
a= 10;

let b="13";
 b="hbu";

const c=23;
//c = 99; its error
console.log(c);

a=[1,2,3,'a','b','c',{'hi':'you'}]
b={'a':function aa (a){console.log(a[6].hi);}, 'hi':'you'}
console.log(a[6]);
console.log(a[6].hi);// to execute only value
console.log(b.a);
aa =(a,b) => a+b; //by (a,b) it identifies it as fn => tellls it returns a+b 
 //by (a,b) it identifies it as fn => tellls it returns a*b 
function aa(a,b){
 return a+b;
 
}

console.log(aa(8,7));

bb =(a,b) =>{
    console.log('mul',a,b);
    return a*b;
} //instead of using function keyword we can use like this fn_name = (a) => {//}
console.log(bb(8,7));

document.body.style.backgroundColor = 'grey'

document.getElementsByTagName('h1')[0].innerText='ggggg'
document.getElementsByTagName('h1')[0].innerHTML='<div style= "color:yellow ">SSSSSSS </div>'
document.getElementsById('mul').addEventListener('click', ()=>{
    let a=5
    let b=55
    bb(a,b);
}



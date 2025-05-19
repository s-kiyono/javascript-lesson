//Q1

let nickname = 'きよの';
let age = 26;
console.log('私のニックネームは'+nickname+'です。年齢は'+age+'歳です。');

//Q2

let languages =  ['JavaScript','PHP','Ruby', 'Python','Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5

let average = playerList[0].age+playerList[1].age+playerList[2].age;
console.log('3人の年齢の平均値 ＝＞',average/3);

//Q6

function sayHello( ){
console.log('Hello');
}

sayHello( );

let sayWorld = function( ){
console.log('World');
}

sayWorld( );

//Q7

user.birthday = '2000-09-27';
user.sayHello = function( ){
console.log('Hello！');
}


console.log(user.birthday);
user.sayHello();

//Q8
let calc = {};

calc.add =function (x,y){
console.log(x+y);
}

calc.subtract = function(x,y){
console.log(x-y);
}

calc.multiply = function(x,y){
console.log(x*y);
}

calc.divide = function(x,y){
console.log(x/y);
}

calc.add(3,4);
calc.subtract(25,15);
calc.multiply(7,7);
calc.divide(25,5);

//Q9
function remainder(x,y){
 return x % y;
}

console.log('5 を 3 で割った余りは '+remainder(5,3)+' です。');

//Q10

//関数の中で定義した変数xのスコープは関数の中であり、
//関数の外からは参照出来ない為。


//＊＊＊＊＊応用＊＊＊＊＊

//Q1
console.log('Q1 =>',Math.floor(Math.random() * 10));

//Q2
setTimeout(function(){console.log("Hello World!")},3000);

//Q3

let num = 5

if(num>0){
console.log('num is greater than 0');
}else if(num<0){
console.log('num is less than 0');
}else if(num=0){
console.log('num is 0');
}

//Q4
let numbers = [ ]

for (let numbers = 0; numbers <= 99; numbers++) {
  console.log(numbers);
}

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let α =0 ; α <= 6; α++) {
  if(typeof mixed[α] === 'number' && mixed[α]%2==0){
  console.log(mixed[α],'Number であり偶数','even');
}else if(typeof mixed[α] === 'number' && mixed[α]%2==1){
  console.log(mixed[α],'Number であり奇数','odd');
}else if(typeof mixed[α] !== 'number' ){
 console.log(mixed[α],'Number以外','not number');
}  
}
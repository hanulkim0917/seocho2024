let a = 1;
let b = 2;

// const c = (a++, b++);

let c = (a = a+1, b = b + 1);
console.log('c =', c, a, b);

let d = (a--, b + a);
console.log('d =', d, a, b);

d = void (c = a+b);
console.log(a, b, c, d);; // ?

console.log('----');
const first = '';
const last = 'Bob';

const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);

const three = 0.1 + 0.2;
console.log(three);
console.log(0.1 + 0.7);

const ep = Math.abs(three - 0.3) < Number.EPSILON;
console.log(' ep:', ep, Number.EPSILON);
console.log(Math.trunc((0.1+0.2)* 10)/10);

console.log(2.4 % 1);
console.log('///////////////////////');
for(let i = 0.1; i < 1; i = i + 0.1, Number.EPSILON)
console.log(i);


/* console.log('-------------');
if(three === 0.3) {
   console.log('Ok');
 } else {
    console.log('exists garbage!')
}; */

const x = 2;
// x가 1이면 one, 2면 two, 3이면 three, 그외 etc 를 출력
// 1. if 문
console.log('---------------------');
if(x===1){
    console.log('one');
}else if (x===2) {
    console.log('two');
}else if (x===3) {
    console.log('Three');
}else {
    console.log('etc')
}

// 2. switch 문
console.log('=============');
switch (x) {
    case (x===1):
      break;
      console.log('one');
    case (x===2):
      break;
      console.log('two');
   case (x===3):
     break;
     console.log('three');
    default:
    console.log('etc');
}
// 3. 3항 연산자

console.log('-------------');
let i = 5;
while (i>0){
    console.log("🚀  i:", i)
    i = i - 1;
}
i = 5;
while (i-- > 0) console.log("🚀 ~ i:", i);

console.log('______________');
i = 5;
do {
    console.log("🚀 + i:", i);
} while (i--> 1);

// 1 ~ 100 까지 출력하기(더하기) 5050

// 1. while
/*console.log('=================');
let n = 100;
while (n>0){
    console.log("🚀 ~ n:", n)
    n = n - 1;
}*/

console.log('============');
i = 0;
let sum = 0;
while (i<100){
    i = i + 1;
    sum = sum + i;
}
console.log("🚀 ~ sum:", sum);

// 2. for

// j = 0; while(j<5) {j++; ...} 
for(let j = 0; j <= 5; j++){
    console.log('j =', j);
}

for(let j = 5; j > 0; j--){
    console.log('j =', j);
}

/*console.log('-------+------')
for(let i = 0; (i<100); i = i + 1; sum = sum + i;){
console.log("🚀 ~ sum:", sum);}*/

sum = 0;
for(let i = 0; i < 100; i++){
    sum = sum + i + 1;
}
console.log("🚀 ~ sum:", sum)

//배열 출력하기
const arr = [10,20,30,40,50];
for (let i = 0; i < arr?.length; i++){
    console.log(`🚀 arr[${i}]:`, arr[i]);
}
for (const t of arr){
    console.log("🚀 ~ t:", t);
}

console.log('+++++++++++++++++++++')
const user = { id: 1, name: 'Hong'};
for(const p in user){
    console.log("🚀 ~ p:", p, user[p]);
}

const WEEK_NAMES = '일월화수목금토';
for (const w of WEEK_NAMES){
    console.log("🚀  w:", w);
}

console.log('====================');
const dt = new Date();
console.log("🚀 ~ dt:", dt, dt.getDay());


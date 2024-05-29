console.log('p.50 for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.');
for(let i = 0.1; i < 1; i = i + 0.1) 
   console.log(+i.toFixed(1));

console.log('\np.51 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.\n');
for (let a = 1; a <= 10; a += 1) {
    const sq = +Math.sqrt(a).toFixed(3);
    if (sq % 1) console.log(a, sq);
}
    for (let a = 1; a <= 10; a++) {
        let sqrt = Math.sqrt(a).toFixed(3);
        console.log(`${a} ${sqrt}`);
}

console.log('\np.52 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.\n');
// const today = new Date();  today.getDay(); // 요일번호
// 오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')

console.log('\np.53 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.\n');
// function getLen(s){
//     return(s ?? '').toString().length;
// }
// function addPoints(a,b){
//     const lenA = (a + '').toString().length;
//     const lenB = (b ?? '').toString().length;
//     console.log('🚀  len:', len)
// }
// addPoints(null, 0.123)


// p.65
// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)
const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'}
 
function f1(user) {
    console.log(user.id);
    console.log(user.name);
;}
f1(hong);
f1(lee);


// function f1(x,y) {..}
// var f2 = function(x,y) {...}
// const f3 = (x,y) => {} 

// p.66
//다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
// const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
// const hong = { id: 1, name: 'Hong' };
// const lee = { id: 2, name: 'Lee' };
// function p66(user) {
//   const { passwd, ...userInfo } = user;
//   console.log('🚀>>  userInfo:', userInfo);
// }
// p66(user);

// p.67
// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 
// cf. const id1 = arr[0][0].id;
const arr = [[{id: 1}], [{id:2}, {id: 3}]]
// console.log(arr[0][0].id);
const id1 = arr[0][0].id;
console.log(id1);
const id2 = arr [1][0].id;
console.log(id2);
const id3 = arr [1][1].id;
console.log(id3);

// p.112
// p.113
// p.114
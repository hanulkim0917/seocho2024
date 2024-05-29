const f2 = 
    (f) => 
    (...args) => 
        console.log(f.name, f(...args) );

console.log('----');
const fx = f2(Math.max);
const ret = fx(1, 3, 5, 7);

function samef2(f){
    return function (...args) {
        console.log(f.name), f(...args);
    }
};

console.log('--------');
const fns = [Math.max, Math.min];
for (const f of fns){
    console.log(f.name, f(1, 3, 5));
}

const arr = [1,2,3,4,5];
// ㄴ 위와 동일 const arr = new Array(1, 2, 3, 4, 5);
Array.prototype.first = function(){
    return this[0];
};
Array.prototype.last = function(){
    return this[this.length - 1];
};
console.log(arr.first(), arr.last());


// currying
// const af () => { };
// function af() { }

// const ff = () => af;

// function ff(){
//     let count = 0;
//     return;
// }


const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('🚀  ret2:', ret2)

Array.prototype.mapX = function(f){
    const rets = [];
    for (let i = 0; i < this.length; i++){
        //f(this[i], i, this);
        rets.push(f(this[i]));
    }return rets;
};

const ret3 = arr2.mapX(Number);
console.log('🚀  ret3:', ret3)
const ret4 = arr2.mapX(parseInt);
console.log('🚀  ret4:', ret4)

function ffff(a, b, c){
    console.log(this.length);
}
ffff(1,2,3);

console.log(Number.length);

console.log('---------');
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};


var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();
stack.unshift(9);
// unshift는 언제 자주 사용하나?

queue.push(10);
queue.push(20);
queue.push(30);

// queue.shift();
// queue.shift();

var queueOutput = queue.shift();

console.log('🚀  stack:', stack, stackOutput);
console.log('🚀  queue:', queue, queueOutput);

const list = ['글3', '글2', '글1'];


const 글2index = list.indexOf('글2');
console.log('🚀  글2index:', 글2index);



function addArticle(article){
    list.unshift(article);
}

function removeOld(){
    list.pop();
}

addArticle('글4');
removeOld();
removeOld();

list.push('글4');

console.log('🚀  list:', list)

console.log(list.indexOf('글4'));
console.log(list.lastIndexOf('글4'));

const hong = {id : 1, name: 'Hong'};
const kim = {id : 2, name: 'Kim'};
const park = {id : 3, name: 'Park'};
const choi = {id : 4, name: 'Choi'};
// 글1234 와 달리 hong,kim,park은 객체 형태라서 indexOf로는 찾기 어려움
//              0,   1,    2,    3    
const users = [hong, kim, park, choi];

const id2userIndex = users.findIndex((v, i) => v.id === 2);
console.log('🚀  id2user ', id2userIndex);

const id2user = users.find(v => v.id ===22);
console.log('🚀  users:', id2user);


for (const user of users){
    console.log(user.id, user.name);
}

console.log('- - - - - - ');
users.forEach(user => console.log(user.id, user.name));

const userIds = users.map(v => v.id);
console.log('🚀  userIds:', userIds);

const evenUsers = users.filter(v => v.id % 2 === 0);
console.log('🚀  evenUsers:', evenUsers);

const hasId3 = users.some(v => v.id === 3);
console.log('🚀  hasId3:', hasId3);

const second = users[1];
console.log('🚀  second:', second);

console.log('end_practice');
// const end = users[users.length - 1];
// const beforEnd = [users[users.length - 2]];

const end = users.at(-1);
const beforEnd = users.at(-2);

console.log('🚀  end:', end);
console.log('🚀  beforEnd:', beforEnd);

console.log('arr_practice');
const arr1 = [1,2];
const arr2 = [3,4];

const arr3 = [...arr1, ...arr2];
console.log('🚀  arr3:', arr3);


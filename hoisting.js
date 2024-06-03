/*
let i = 1; // 선언했다! 선언 하고 써라!
console.log('🚀  i:', i)

console.log('🚀  x:', x)
var x = 1;

function getUserName(user){
    return user.name;
}

var hong = { id : 1, name : 'Hong'};
getUserName('hong');
hong.id;
hong.idd; // 틀려도 오류가 안난다!

getUserName({ id: 1, name: 'Hong'});

*/

console.log(i); // error
let i = 1;
console.log('x=', x);
var x = 1;
console.log(ff, f);
f(); // error 
{
  f();
  var x = 2;
  function f() {
    console.log('f>', x, xx);
  }
  const b = 1;
}
function ff() {
  console.log('ff>', y, yy);
}
if (x >= 2) {
  var y = 5;
  let yy = 55;
}
var xx = 100;
ff();


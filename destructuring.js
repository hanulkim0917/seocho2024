let x, y;  x = y = 9;           // x = 9, y = 9
// const z = (y++, x + y);         // z = 19
// x += y; x %= y; x &= y; x ^= y; // x = x + y; x = x & y;
// const u = {id: 1, name: 'Hong', age: 29};   // object

// let {id, name, addr} = u; // let id = 1 ⇐ let id = user.id;  let addr = undefined;

// // let {id, ...info} = u; // id = 1, info = { name: 'hong', age: 29 }
// let id, name; 
// {id, name} = u;  // Error!(why?)  ⇒⇒⇒ ({id, name} = u);  // OK!
// const arr = [1, 2, 3, 4, 5];
// let [a, b, ...c] = arr; // let a = arr[0], b = arr[1]
// [a, b] = [b, a];
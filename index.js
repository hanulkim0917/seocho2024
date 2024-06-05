// console.log('seochohanul');
// import moment from 'momoent';

export const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

export function fromNow(dt) {
    return moment(dt).fromNow();
}

Array.prototype.first = function() {
    return this[0];
}

console.log([1, 2, 3].last);
// p155. 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// const classNames = (...args) => {
//     const nonEmptyStrings = args.filter(str => str !== '');
//     const result = nonEmptyStrings.join(' ');
//     return result;v
//   };
  
//   const ret2 = classNames('', 'a b c', 'd', '', 'e');
//   console.log(ret2); // 출력: 'a b c d e'

const classNames = (...args) => args.filter(a=> !!a.trim()).join(' ');

    const ret2 = classNames('', 'a b c', 'd', '', 'e');
 console.log(ret2); // 출력: 'a b c d e'

function classNames2(...args){
    const ret = args.filter(a => !!a.trim()).join('');

}
    const ret3 = classNames2('', 'a b  c', 'd',' ','e');
    console.log('🚀  ret3:', ret3);

const arr = [1, 2, 1, 2, 3, 5];
const s3 = new Set(arr);
console.log('🚀  s3:', s3);
// const ret = s3.values(); iterator
const ret = [...s3];
console.log('🚀  ret:', ret);

console.log('!정답 = [...new Set(arr)]');




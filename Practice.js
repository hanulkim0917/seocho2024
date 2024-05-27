console.log('p.50 for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.');
for(let i = 0.1; i < 1; i = i + 0.1) {
    let num = i.toFixed(1);
    if (num.endsWith('.0')) {
        console.log(parseInt(num));  // 정수로 변환하여 출력
    } else {
        console.log(num);
    }
}

console.log('\np.51 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.\n');
for (let a = 1; a <= 10; a++) {
    let sqrt = Math.sqrt(a).toFixed(3);
    console.log(`${a} ${sqrt}`);
}

console.log('\np.52 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.\n');
// const today = new Date();  today.getDay(); // 요일번호
// 오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')
const today = new Date().getDay();
let day;

switch(today) {
    case 0:
        day = "일요일";
        break;
    case 1:
        day = "월요일";
        break;
    case 2:
        day = "화요일";
        break;
    case 3:
        day = "수요일";
        break;
    case 4:
        day = "목요일";
        break;
    case 5:
        day = "금요일";
        break;
    case 6:
        day = "토요일";
        break;
}

console.log("오늘은" + day);

console.log('\np.53 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.\n');
// (단, 소숫점 자리수는 긴쪽에 맞춘다)
// 0.21354 + 0.1   // 0.31354000000000004
// 0.14 + 0.28     // 0.42000000000000004
// 0.34 + 0.226    // 0.5660000000000001
// function addPoints(a, b) {...}
// addPoints(0.21354, 0.1)   // 0.31354
// addPoints(0.14, 0.28)     // 0.42
// addPoints(0.34, 0.226)    // 0.566


// p.65
// p.66
// p.67
// p.112
// p.113
// p.114
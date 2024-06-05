// https://jsonplaceholder.typicode.com
// user의 이름을 구하는 함수를 작성하시오.

// import { reject } from "async";
// import { resolve } from "path";

const URL = 'https://jsonplaceholder.typicode.com' ; 

const getUserName = async (userId) => {
    // const res = await fetch(URL + '/users/1');
    const res = await fetch(`${URL}/users/${userId}`);
    // console.log('🚀  getUserName  res:', res)
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve('OK'), 2000);
    });

    const data = await res.json(); 
    console.log('🚀  getUserName  data:', data);
    return data?.name;
};

console.log('1번 유저명', getUserName(1));

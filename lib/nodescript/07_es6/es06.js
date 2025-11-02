const obj = {a: 10, b: 20, c: 30};

const {a: foo, c: bar} = obj    // 별칭을 사용해 꺼내기
console.log(foo);   // 10
console.log(bar);   // 30

const arr = ['foo', 'bar', 'baz'];

for (let i = 0; i < arr.length; i++) {      // C 언어 문법
    console.log(arr[i]);
}

arr.forEach((element) =>{                   // forEach 함수 사용
    console.log(element);
});

for (const element of arr){                 // ES6 이후 (비동기 처리도 가능)
    console.log(element);
}
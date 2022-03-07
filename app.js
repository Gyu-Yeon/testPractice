//Q10

function solution(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) != -1) {
      count++;
      s2 = s2.replace(s1[i], "");
    }
  }
  return count;
}

// Q11

function solution(n) {
  // number를 string으로 변환시킨후,
  // number의 length /2로 왼쪽과 오른쪽을 나눈뒤
  // 다시  parseInt 함수를 사용하여 숫자로 만든뒤,
  // 합을 더하여 같다면 return true else / return false.
  let w = n.toString();
  let mid = w.length / 2;
  // console.log(mid);
  let left = w.slice(0, mid);
  let right = w.slice(mid);
  // console.log(left);
  // console.log(right);
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < left.length; i++) {
    leftSum += parseInt(left[i]);
    rightSum += parseInt(right[i]);
    console.log(leftSum);
    console.log(rightSum);
  }
  if (leftSum == rightSum) {
    return true;
  } else {
    return false;
  }
}

// console.log(solution(1230));

//Q12
function solution(a) {
  // 배열의 카피를 오름차순으로 정렬한 후
  // 기존 배열에 -1이 아닐 시 정렬된 배열에서의 -1이 아닌 수로 변경.
  // return arr
  let arr = [...a];
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  while (arr[0] == -1) {
    if (arr[0] == -1) {
      arr.splice(0, 1);
    }
  }
  let position = 0;
  console.log(arr);
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = arr[position];
      position++;
    }
  }
  return a;
}

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));

//Q13
function solution(inputString) {
  // 인풋에서 괄호의 위치를 찾는다.
  // counter1에는 괄호의 시작을, counter2에는 괄호의 끝을 저장한다.
  // 첫번째 괄호의 시작부터 끝까지의 단어를 reverse한 후 다음번 괄호의 시작과 끝도 reverse한다.
  // inputString을 return 한다.
  let start = [];
  let end = [];
  for (let i = 0; i < inputString.length; i++) {
    // console.log(inputString[i]);
    if (inputString[i] == "(") {
      start.push(i);
      for (let j = i + 1; j < inputString.length; j++) {
        if (inputString[j] == ")") {
          end.push(j);
        }
      }
    }
  }
  // console.log(start, end);
  let rev = [];
  for (let k = 0; k < start.length; k++) {
    let word = inputString.slice(start[k] + 1, end[k]);
    rev.push(word);
  }
  console.log(rev);
  let fin = [];
  for (let l = 0; l < rev.length; l++) {
    let word = [...rev[l]].reverse().join("");
    fin.push(word);
  }

  console.log(fin);
  let result = inputString;
  for (let m = 0; m < fin.length; m++) {
    result = result.replace(rev[m], fin[m]).replace(/[{()}]/g, "");
  }
  return result;
}

// console.log(solution("foo(bar(baz))blim"));

//Q13
function solution(inputString) {
  while (inputString.includes("(")) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join("")
    );
  }
  return inputString;
}

//Q14
function solution(a) {
  // 배열 a 를 team1 과 team2라는 두 배열에 나누어 담는다.
  // 짝수 는 team 1 홀수는 team2에 나누어 담는다.
  //team1의 sum을 sum1에 저장한다.
  //team2의 sum을 sum2에 저장한다.
  //return sum[sum, sum2]
  let team1 = [];
  let team2 = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      team1.push(a[i]);
    } else {
      team2.push(a[i]);
    }
  }
  console.log(team1);
  console.log(team2);
  let sum1 = 0;
  let sum2 = 0;

  team1.forEach((a) => {
    sum1 += a;
    console.log(sum1);
  });
  team2.forEach((a) => {
    sum2 += a;
    console.log(sum2);
  });
  let sum = [sum1, sum2];
  return sum;
}

// let a = [50, 60, 60, 45, 70];
// console.log(solution(a));

//Q15
function solution(a) {
  // 주어진 배열의 길이를 확인.
  // arr[0].length+2 = picture.length;
  // picture.length만큼 "*" concat하여 arr[0] 과 arr[arr.length-1]에 대입
  // arr[1]에도 앞과 뒤에 cocat"*""
  // return picture;
  let leng = a.length;

  let each = a[0].length;

  let row1 = "";
  let rowLast = "";
  let star = "*";
  for (let i = 0; i < each + 2; i++) {
    row1 = row1.concat("*");
  }
  for (let i = 0; i < each + 2; i++) {
    rowLast = rowLast.concat("*");
  }

  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].concat("*");
    a[i] = "*".concat(a[i]);
  }
  a.unshift(row1);
  a.push(rowLast);
  return a;
}

let picture = ["abc", "ded"];

// console.log(solution(picture));

//Q16

function solution(a, b) {
  function solution(a, b) {
    const ad = a.filter((v, i) => v != b[i]);
    const bd = b.filter((v, i) => v != a[i]);
    return (
      ad.length == 0 || (ad.length == 2 && ad.join("") == bd.reverse().join(""))
    );
  }
}

// let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
// let b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
// console.log(solution(a, b));
//Q 17
function solution(a) {
  // a[0] 과 a[1] 을 비교하여 a[1] 이 a[0] 보다 커질때까지 a[1]에 ++ 를해준다.
  // counter를 설정하여 ++를 해줄때마다 counter++를해준다.
  let i = 0;
  let j = 1;
  let counter = 0;
  for (let m = 0; m < a.length; m++) {
    while (a[i] >= a[j]) {
      a[j] = a[j] + 1;

      counter++;
    }
    i++;
    j++;
  }
  return counter;
}

// let a = [1, 1, 1];
// console.log(solution(a));

// let person = [0, 1, 2];

// function change(arr) {
//   arr = [4, 5, 6];
//   console.log(person);
// }

// change(person);

// function Student(name, age, grade) {
//   this.name = name;
//   this.age = age;
//   this.grade = grade;
//   this.sayHi = function () {
//     console.log(`Hi my name is ${this.name} `);
//   };
// }

// let student1 = new Student("Choi", 27, 4);

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.vat = function () {
//     console.log(`${this.price / 10}`);
//   };
// }

// let product1 = new Product("shirts", 50000);
// let product2 = new Product("pants", 50000);

//Q18
function solution(inputString) {
  /*
   * 1. create object where each letter will be key, each value will be how many times this letter occurs in a string
   * 2. populate object with values by looping over the string
   * 3. check the object:
   * 4. if the letter can be devided by 2, it's good, if more than one letter can't be devided by 2, then it's not good
   *
   * */

  let object = {};
  inputString.split("").forEach((letter, index) => {
    if (object[letter]) {
      object[letter] = object[letter] + 1;
    } else {
      object[letter] = 1;
    }
  });

  let isUnevenLetterExist = false;
  let result = true;

  let values = Object.values(object);
  let i = 0;

  while (result && i < values.length) {
    if (values[i] % 2 === 1) {
      if (isUnevenLetterExist) {
        result = false;
      } else {
        isUnevenLetterExist = true;
      }
    }
    i++;
  }

  return result;
}
//Q 19
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  // if YL ==  FL  YR == fR true
  // if YL == FR YR == FL true
  // none of these return false;
  if (yourLeft == friendsLeft || yourLeft == friendsRight) {
    if (yourRight == friendsRight || yourRight == friendsLeft) {
      return true;
    }
  }
  if (yourLeft != friendsLeft || yourLeft != friendsRight) {
    if (yourRight != friendsLeft || yourRight != friendsRight) {
      return false;
    }
  }
}
let yourLeft = 20,
  yourRight = 15,
  friendsLeft = 5,
  friendsRight = 20;
console.log(solution(yourLeft, yourRight, friendsLeft, friendsRight));

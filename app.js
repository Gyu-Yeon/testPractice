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

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));

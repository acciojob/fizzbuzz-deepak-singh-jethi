let ans = "";

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    ans += "FizzBuzz\n";
  } else if (i % 3 === 0) {
    ans += "Fizz\n";
  } else if (i % 5 === 0) {
    ans += "Buzz\n";
  } else {
    ans += i + "\n";
  }
}

console.log(ans);
const rule = 'Find the greatest common divisor of given numbers.';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
};

const getQuestion = () => {
  const num1 = randomNum(1, 50);
  const num2 = randomNum(1, 50);
  const result = gcd(num1, num2);
  const question = [num1, num2].join(' ');
  const answer = String(result);
  return [question, answer];
};

export { rule, getQuestion };

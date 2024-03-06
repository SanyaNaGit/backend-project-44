const rule = 'What is the result of the expression?';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomElem = (list) => {
  const rand = Math.floor(Math.random() * list.length);
  return list[rand];
};

const operation = ['+', '-', '*'];

const getQuestion = () => {
  const elem = randomElem(operation);
  const [num1, num2] = [randomNum(1, 100), randomNum(1, 100)];
  let result = 0;
  if (elem === '+') {
    result = num1 + num2;
  } else if (elem === '-') {
    result = num1 - num2;
  } else if (elem === '*') {
    result = num1 * num2;
  }
  const question = [num1, elem, num2].join(' ');
  const answer = String(result);
  return [question, answer];
};

export { rule, getQuestion };

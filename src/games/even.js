const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestion = () => {
  const question = randomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

export { rule, getQuestion };

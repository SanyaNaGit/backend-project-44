const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  let index = 1;
  let count = 0;
  while (index <= num / 2) {
    if (num % index === 0) {
      count += 1;
    }
    index += 1;
  }
  return count === 1;
};

const getQuestion = () => {
  const question = randomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export { rule, getQuestion };

const rule = 'What number is missing in the progression?';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getProgression = (start, step) => {
  const progressionLength = 10;
  const stop = start + (progressionLength * step);
  const result = [];
  for (let i = start; i < stop; i += step) {
    result.push(i);
  }
  return result;
};

const getQuestion = () => {
  const startProgression = randomNum(1, 100);
  const step = randomNum(1, 10);
  const progression = getProgression(startProgression, step);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const answer = String(progression.splice(randomIndex, 1, '..'));
  const question = progression.join(' ');
  return [question, answer];
};

export { rule, getQuestion };

#!/usr/bin/env node
import { rule, getQuestion } from '../src/games/calc.js';
import runGame from '../src/index.js';

runGame(getQuestion, rule);

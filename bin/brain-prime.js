#!/usr/bin/env node
import { rule, getQuestion } from '../src/games/prime.js';
import runGame from '../src/index.js';

runGame(getQuestion, rule);

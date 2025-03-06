#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

// Функция для проверки на четность
const isEven = (num) => num % 2 === 0;

// Основная логика игры
const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;
    const totalQuestions = 3;

    while (correctAnswers < totalQuestions) {
        const question = randomInt(1, 100); // Генерация случайного числа от 1 до 99
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        const correctAnswer = isEven(question) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return; // Завершение игры при неправильном ответе
        }

        console.log('Correct!');
        correctAnswers++;
    }

    console.log(`Congratulations, ${name}!`);
};

// Запуск игры
playGame();

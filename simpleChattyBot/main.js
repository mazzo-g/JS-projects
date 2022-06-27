const prompt = require('prompt-sync')({ sigint: true });

function greet(botName, birthYear) {
  console.log(`Hello! My name is ${botName}.`);
  console.log(`I was created in ${birthYear}.`);
}

function remindName() {
  console.log('Please, remind me your name.');
  const name = prompt('>');

  console.log(`What a great name you have, ${name}!`);
}

function guessAge() {
  console.log('Let me guess your age.');

  console.log('Enter remainder of dividing your age by 3.');
  const rem3 = Number(prompt('>'));

  console.log('Enter remainder of dividing your age by 5.');
  const rem5 = Number(prompt('>'));

  console.log('Enter remainder of dividing your age by 7.');
  const rem7 = Number(prompt('>'));

  const age = (((rem3 * 70) + (rem5 * 21) + (rem7 * 15)) % 105);
  console.log(`Your age is ${age}; that's a good time to start programming!`);
}

function count() {
  console.log('Now I will prove to you that I can count to any number you want.');
  const number = Number(prompt('>'));

  for (let current = 0; current <= number; current + 1) {
    console.log(`${current} !`);
  }

  console.log('See? I said I could do it.');
}

function test() {
  console.log('Let\'s test your programming knowledge.');

  console.log(`What is the data type of null?
      1. Object
      2. null
      3. undefined
      4. NaN`);
  let choice = Number(prompt('>'));

  while (choice !== 1) {
    console.log('Please, try again.');
    choice = Number(prompt('>'));
  }

  console.log('Correct! You\'ve nailed it!');
}

function end() {
  console.log('Congratulations, have a nice day!');
}

greet('Lavender', '2022');
remindName();
guessAge();
count();
test();
end();

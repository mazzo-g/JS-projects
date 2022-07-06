const input = require('prompt-sync')({ sigint: true });

const inventory = {
  water: 400,
  milk: 540,
  coffeeBeans: 120,
  cups: 9,
  money: 550,
};

const espresso = {
  water: 250,
  milk: 0,
  coffeeBeans: 16,
  price: 4,
};

const latte = {
  water: 350,
  milk: 75,
  coffeeBeans: 20,
  price: 7,
};

const cappuccino = {
  water: 200,
  milk: 100,
  coffeeBeans: 12,
  price: 6,
};

function printInventory() {
  console.log(`\nThe coffee machine has:
${inventory.water} ml of water
${inventory.milk} ml of milk
${inventory.coffeeBeans} g of coffee beans
${inventory.cups} disposable cups
$${inventory.money} of money
`);
}

function makeCoffee(coffeeType) {
  if (coffeeType === 'espresso') {
    if (inventory.water < espresso.water) {
      console.log('Sorry, not enough water!\n');
    } else if (inventory.milk < espresso.milk) {
      console.log('Sorry, not enough milk!\n');
    } else if (inventory.coffeeBeans < espresso.coffeeBeans) {
      console.log('Sorry, not enough coffee beans!\n');
    } else if (inventory.cups < 1) {
      console.log('Sorry, not enough coffee cups!\n');
    } else {
      console.log('I have enough resources, making you a coffee!\n');
      inventory.water -= espresso.water;
      inventory.milk -= espresso.milk;
      inventory.coffeeBeans -= espresso.coffeeBeans;
      inventory.cups -= 1;
      inventory.money += espresso.price;
    }
  } else if (coffeeType === 'latte') {
    if (inventory.water < latte.water) {
      console.log('Sorry, not enough water!\n');
    } else if (inventory.milk < latte.milk) {
      console.log('Sorry, not enough milk!\n');
    } else if (inventory.coffeeBeans < latte.coffeeBeans) {
      console.log('Sorry, not enough coffee beans!\n');
    } else if (inventory.cups < 1) {
      console.log('Sorry, not enough coffee cups!\n');
    } else {
      console.log('I have enough resources, making you a coffee!\n');
      inventory.water -= latte.water;
      inventory.milk -= latte.milk;
      inventory.coffeeBeans -= latte.coffeeBeans;
      inventory.cups -= 1;
      inventory.money += latte.price;
    }
  } else if (coffeeType === 'cappuccino') {
    if (inventory.water < cappuccino.water) {
      console.log('Sorry, not enough water!\n');
    } else if (inventory.milk < cappuccino.milk) {
      console.log('Sorry, not enough milk!\n');
    } else if (inventory.coffeeBeans < cappuccino.coffeeBeans) {
      console.log('Sorry, not enough coffee beans!\n');
    } else if (inventory.cups < 1) {
      console.log('Sorry, not enough coffee cups!\n');
    } else {
      console.log('I have enough resources, making you a coffee!\n');
      inventory.water -= cappuccino.water;
      inventory.milk -= cappuccino.milk;
      inventory.coffeeBeans -= cappuccino.coffeeBeans;
      inventory.cups -= 1;
      inventory.money += cappuccino.price;
    }
  }
}

function buy() {
  let coffeeChoice = input(
    '\nWhat do you want to buy?'
    + ' 1 - espresso,'
    + ' 2 - latte,'
    + ' 3 - cappuccino,'
    + ' back - to main menu: \n',
  );
  while (coffeeChoice !== 'back') {
    if (coffeeChoice === '1') {
      makeCoffee('espresso');
      coffeeChoice = 'back';
    } else if (coffeeChoice === '2') {
      makeCoffee('latte');
      coffeeChoice = 'back';
    } else if (coffeeChoice === '3') {
      makeCoffee('cappuccino');
      coffeeChoice = 'back';
    } else {
      coffeeChoice = input(
        '\nWhat do you want to buy?'
        + ' 1 - espresso,'
        + ' 2 - latte,'
        + ' 3 - cappuccino,'
        + ' back - to main menu: \n',
      );
    }
  }
}

function take() {
  console.log(`I gave you ${inventory.money}`);
  inventory.money = 0;
}

function fill() {
  inventory.water += Number.parseInt(
    input('\nWrite how many ml of water you want to add: \n', 0),
    10,
  );
  inventory.milk += Number.parseInt(
    input('\nWrite how many ml of milk you want to add: \n', 0),
    10,
  );
  inventory.coffeeBeans += Number.parseInt(
    input('\nWrite how many grams of coffee beans you want to add: \n', 0),
    10,
  );
  inventory.cups += Number.parseInt(
    input('\nWrite how many disposable coffee cups you want to add: \n', 0),
    10,
  );
}

let action = input('Write action (buy, fill, take, remaining, exit): \n');
while (action !== 'exit') {
  if (action === 'buy') {
    buy();
    action = input('Write action (buy, fill, take, remaining, exit): \n');
  } else if (action === 'fill') {
    fill();
    action = input('Write action (buy, fill, take, remaining, exit): \n');
  } else if (action === 'take') {
    take();
    action = input('Write action (buy, fill, take, remaining, exit): \n');
  } else if (action === 'remaining') {
    printInventory();
    action = input('Write action (buy, fill, take, remaining, exit): \n');
  } else {
    action = input('Write action (buy, fill, take, remaining, exit): \n');
  }
}

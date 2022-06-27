const input = require('prompt-sync')({ sigint: true });

const inventory = {
  water: 400,
  milk: 540,
  coffeeBeans: 120,
  cups: 9,
  money: 550,
};

const coffee = {
  espresso: {
    water: 250,
    milk: 0,
    coffeeBeans: 16,
    price: 4,
  },
  latte: {
    water: 350,
    milk: 75,
    coffeeBeans: 20,
    price: 7,
  },
  cappuccino: {
    water: 200,
    milk: 100,
    coffeeBeans: 12,
    price: 6,
  },
};

const machine = {
  printInventory() {
    console.log(`The coffee machine has:
${inventory.water} ml of water
${inventory.milk} ml of milk
${inventory.coffeeBeans} g of coffee beans
${inventory.cups} disposable cups
$${inventory.money} of money
`);
  },

  buy() {
    const coffeeChoice = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ');
    switch (coffeeChoice) {
      case '1':
        this.makeCoffee();
        break;
      case '2':
        this.makeCoffee();
        break;
      case '3':
        this.makeCoffee();
        break;
      case 'back':
        main();
        break;
      default:
        main();
    }
  },

  take() {
    inventory.money = 0;
  },

  fill() {
    inventory.water += Number.parseInt(
      input('Write how many ml of water you want to add: '),
      10,
    );
    inventory.milk += Number.parseInt(
      input('Write how many ml of milk you want to add: '),
      10,
    );
    inventory.coffeeBeans += Number.parseInt(
      input('Write how many grams of coffee beans you want to add: '),
      10,
    );
    inventory.cups += Number.parseInt(
      input('Write how many disposable coffee cups you want to add: '),
      10,
    );
  },

  makeCoffee() {
  },
};

const main = () => {
  machine.printInventory();
  const action = input('Write action (buy, fill, take):');
  switch (action) {
    case 1:
      machine.buy();
      break;
    case 2:
      machine.fill();
      break;
    case 3:
      machine.take();
      break;
    case 'exit':
      process.exit();
      break;
    default:
      main();
  }
  machine.printInventory();
};

main();

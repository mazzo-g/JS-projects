const input = require('prompt-sync')({ sigint: true });

// Define currencies and rates
const exchange = {
  rates: {
    JPY: 113.5,
    EUR: 0.89,
    USD: 1,
    RUB: 74.36,
    GBP: 0.75,
  },

  getCurrency(currency) {
    let result = '';
    Object.keys(this.rates).forEach(
      (key) => {
        if (key === currency) {
          result = key;
        }
      },
    );
    return result;
  },

  getRate(currency) {
    let result = '';
    Object.entries(this.rates).forEach(
      ([key, value]) => {
        if (key === currency) {
          result = value;
        }
      },
    );
    return result;
  },
};

// Introduction of rates and capabilities
console.log('Welcome to Currency Converter!');
console.log(`${exchange.rates.USD} USD equals  ${exchange.rates.USD} USD`);
console.log(`${exchange.rates.USD} USD equals  ${exchange.rates.JPY} JPY`);
console.log(`${exchange.rates.USD} USD equals  ${exchange.rates.EUR} EUR`);
console.log(`${exchange.rates.USD} USD equals  ${exchange.rates.RUB} RUB`);
console.log(`${exchange.rates.USD} USD equals  ${exchange.rates.GBP} GBP`);

let want = 0;

while (want !== 2) {
  console.log('What do you want to do?');
  console.log('1-Convert currencies 2-Exit program');
  want = input();

  if (Number.isNaN(parseFloat(want)) || (want < 1 || want > 2)) {
    console.log('Unknown input');
    continue;
  }

  if (want == 2) {
    console.log('Have a nice day!');
    break;
  }

  console.log('What do you want to convert?');
  const sourceCurrency = input('From: ').toUpperCase();
  if (!(exchange.getCurrency(sourceCurrency))) {
    console.log('Unknown currency');
    continue;
  }

  const targetCurrency = input('To: ').toUpperCase();
  if (!(exchange.getCurrency(targetCurrency))) {
    console.log('Unknown currency');
    continue;
  }

  const amount = input('Amount: ');
  if (Number.isNaN(parseFloat(amount))) {
    console.log('The amount has to be a number');
    continue;
  }

  if (amount <= 0) {
    console.log('The amount can not be less than 1');
    continue;
  }

  const result = exchange.getRate(targetCurrency)
    * (((1 / (exchange.getRate(sourceCurrency))) * amount));

  console.log(`Result: ${amount} ${sourceCurrency} equals ${result.toFixed(4)} ${targetCurrency}`);
}

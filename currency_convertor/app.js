import express from "express";
import https from "https";
import chalk from "chalk";
import readline from "readline";
const app = express();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const url = `https://v6.exchangerate-api.com/v6/836bacd2fb2ec02fdb3a7a36/latest/USD`;
const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};
https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
    console.log(rates);

    rl.question("Enter the Amount In USD:-", (amount) => {
      rl.question("Enter the target currency  (e.g : inr,npr)", (currency) => {
        const rate = rates[currency.toUpperCase()];

        if (rate) {
          console.log(
            `${amount} USD is approximately in ${convertCurrency(
              amount,
              rate
            )} -${currency}`
          );
        } else {
          console.log("invalid currency code");
        }
        rl.close()
      });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on port ${PORT}`));
});

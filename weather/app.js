import { log } from "console";
import express from "express";
import readline from "readline";
const app = express();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const getData = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e23a933f5e27dad415b0ad196fdb5dce`;
    const response = await fetch(url);
    const data = await response.json();
    // res.send(data);

    console.log("🌍 Real-Time Weather Data:");
    console.log("📍 Location:" + data.name + "," + data.sys.country);

    console.log(" 🌡 Temperature:" + Math.round(data.main.temp - 273.15) + "°C");
    console.log("💧 Humidity " + data.main.humidity + "%");
    console.log("🤗 Feels Like :" + data.main.feels_like - 273.15 + "°C");
    console.log("🌬 Wind Speed:" + data.wind.speed + "m/s");
    console.log("☀️ Condition: " + data.weather[0].main);
    const unixTimestamp = `${data.dt}`; // "dt" value from API
    const lastUpdate = new Date(unixTimestamp * 1000).toLocaleString("en-US", {
      timeZone: "Asia/Kolkata", // Change this to your local timezone
      hour12: true,
    });
    console.log("🕒 Last Updated: " + lastUpdate);
  } catch (error) {
    console.log(error);
  }
  rl.close();
};
app.get("/", (req, res) => {
  rl.question("Enter City Name Here:-", (city) => {
    getData(city);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

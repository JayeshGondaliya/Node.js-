import express from "express";
import axios from "axios";
const app = express();

// const jokes = [

//   {
//     setup: "Why did the scarecrow win an award?",
//     punchline: "Because he was outstanding in his field!",
//   },
//   {
//     setup: "Why don’t skeletons fight each other?",
//     punchline: "They don’t have the guts.",
//   },
//   {
//     setup: "What do you call fake spaghetti?",
//     punchline: "An impasta!",
//   },
//   {
//     setup: "Why don’t eggs tell jokes?",
//     punchline: "Because they might crack up!",
//   },
//   {
//     setup: "How do you organize a space party?",
//     punchline: "You planet!",
//   },
//   {
//     setup: "Why couldn’t the bicycle stand up by itself?",
//     punchline: "Because it was two-tired!",
//   },
//   {
//     setup: "What did the janitor say when he jumped out of the closet?",
//     punchline: "Supplies!",
//   },
//   {
//     setup: "Why did the coffee file a police report?",
//     punchline: "It got mugged!",
//   },
//   {
//     setup: "Why do cows have hooves instead of feet?",
//     punchline: "Because they lactose!",
//   },
//   {
//     setup: "What did one plate say to the other plate?",
//     punchline: "Lunch is on me!",
//   },
// ];

// app.get("/", (req, res) => {
//   const randemIndex = jokes[Math.floor(Math.random() * jokes.length)];
//   console.log(randemIndex);
//   res.send(`<h1>${randemIndex.setup}</h1>  <p> ${randemIndex.punchline}</p>`);
// });
// app.get("/joke", (req, res) => {
//   res.send(jokes);
// });

// using api

const url = "https://official-joke-api.appspot.com/random_joke";
app.get("/", async (req, res) => {
  try {
    const randomJoke = await axios.get(url);
    const data = await randomJoke.json();
    res.send(`${data.setup} <br>${data.punchline}`);
  } catch (error) {
    console.log(error);
  }
});
app.get("/jokes", async (req, res) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/jokes/ten"
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

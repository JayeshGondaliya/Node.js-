// // import readline module
import readline from "readline";

// //create instance of the readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Todo List App!");
const show = () => {
  console.log("\n1 : Enter Task:");
  console.log("2 : Show task:");
  console.log("3 : Delet item:");
  console.log("4 : Exit");
};
show();

const todo = [];

// //user prompt
const userPrompt = () => {
  rl.question("Enter your choice :", (option) => {
    // console.log("this is option to be choice user", option);

    switch (option.trim()) {
      case "1":
        // add todo
        rl.question("Enter Todo :", (data) => {
          // console.log(data);
          todo.push(data);
          console.log(todo);
          show();
          userPrompt();
        });

        break;
      case "2":
        // show todo
        if (todo.length === 0) {
          console.log("no any data");
        } else {
          console.log("displaying.......................");

          todo.forEach((item, index) => {
            console.log(`${index} :${item}`);
          });
        }
        show();
        userPrompt();
        break;

      case "3":
        // Delete item
        if (todo.length === 0) {
          console.log("No tasks to delete.");
          show();
          userPrompt();
        } else {
          console.log("Your Todo List:");
          todo.forEach((item, index) => {
            console.log(`${index} : ${item}`);



            
          });

          rl.question(
            "Enter the index of the item you want to delete: ",
            (input) => {
              const InputParseINIT = parseInt(input);
              if (InputParseINIT > 0) {
                todo.splice(InputParseINIT, 1);
              } else {
                console.log(`invalid index you choice`);
              }
              show();
              userPrompt();
            }
          );
        }
        break;

      case "4":
        // exit
        console.log("Exiting the App");

        rl.close();
        break;

      default:
        console.log("invalid choice...................");
        show();
        userPrompt();
        break;
    }
  });
};

userPrompt();

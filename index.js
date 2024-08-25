const fs = require("fs");
let [, , command] = process.argv;

if (command == "create") {
  let [, , , title] = process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  todo.push({ title: title });
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
} else if (command == "list") {
  console.log(JSON.parse(fs.readFileSync("./todo.json", "utf8")));
} else if (command === "delete") {
  let [, , , title] = process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf-8"));
  let newArr = [];
  newArr = todo.filter((element) => element.title !== title);

  if (newArr.length == todo.length) {
    console.log("Title Not Found");
  } else {
    console.log("Data Has Been Deleted Successfuly ");
    console.log(newArr);
    fs.writeFileSync("./todo.json", JSON.stringify(newArr));
  }
} else if (command === "edit") {
  let [, , , title, newTitle] = process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf-8"));

  let newarr = todo.map((element) => {
    if (element.title === title) {
      element.title = newTitle;
    }
    return element;
  });

  console.log("Data Has Been Deleted Successfuly ");
  console.log(newarr);
  fs.writeFileSync("./todo.json", JSON.stringify(newarr));
} else {
  console.log("Bad Choice ");
}

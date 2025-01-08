const React = require("react");
const ReactDOM = require("react-dom");
const Person = require("./person").default;

const personData = {
  name: "Alice",
  age: 30,
  hobbies: ["cats", "bridge", "fighting the patriarchy"],
};

ReactDOM.render(
  React.createElement(Person, personData),
  document.getElementById("root")
);

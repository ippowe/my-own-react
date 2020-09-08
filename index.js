import { createElement } from "./step1.js";

const element = createElement(
  "div",
  { id: "foo" },
  createElement("a", null, "bar"),
  createElement("b")
);

const container = document.getElementById("root");
console.log(element);
// ReactDOM.render(element, container);

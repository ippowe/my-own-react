import { createElement } from "./step1.js";
import { render } from "./step2.js";

const element = createElement(
  "div",
  { id: "foo" },
  createElement("a", null, "bar"),
  createElement("b")
);

const container = document.getElementById("root");

render(element, container);

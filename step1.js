// createElement

/*
JSX to Vanila JS

const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
);
    
const element = React.createElement(
    "div",
    { id: "foo" },
    React.createElement("a", null, "bar"),
    React.createElement("b")
);
*/

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  // 실제 리액트에서는 사용하지 않는 함수
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

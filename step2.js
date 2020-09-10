// ReactDom.render

export function render(element, container) {
  //Create DOM node with element type
  //Create Text node when element type is TEXT_ELEMENT
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  //Assign Props to the node
  Object.keys(element.props)
    .filter(isProps)
    .forEach((key) => (dom[key] = element.props[key]));

  //Recursively add child
  //it will have to wait until the render finishes
  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

function isProps(key) {
  return key !== "children";
}

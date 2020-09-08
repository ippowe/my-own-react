# my-own-react

## 목적

[build-your-own-react](https://pomb.us/build-your-own-react/)를 가지고 React를 동작 원리를 이해합니다.

## 배운것

### Step0 Review

#### JSX to VanilaJS

```Javascript
// JSX
const element = <h1 title="foo">Hello</h1>
```

```Javascript
// Vanila JS
const element = React.createElement("h1", {title: "foo"}, "Hello")
```

**JSX**를 **Vanila JS**로 **Babel** 같은 툴로 변환하면 `type`, `props`, `children`를 각각 파라미터로 받는 `React.createElement`라는 함수로 변환되어 실행된다.

`.jsx` 또는 `.tsx`파일에서 **JSX**를 사용하기위해 `import React from 'react'`가 반드시 포함되야하는 이유가 **JSX**가 `React.createElement`로 변환되기 때문이다.

`React.createElement`를 함수를 실행한 결과는 아래와 같다.

```Javascript
const element = {
    type: "h1",  // 렌더링하고싶은 tagName(string) 또는 function
    props: {
        title: "foo",
        children: "Hello" // Element를 포함한 array형태도 가능
    }
}
```

### ReactDom.render

```Javascript
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello"
    }
}

const container = document.getElementById("root")
ReactDom.render(element, container)
```

```Javascript
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello"
    }
}

const container = document.getElementById("root")

const node = document.createElement(element.type)
node['title'] = element.props.title;

const text = document.createTextNode("")
text['nodeValue'] = element.props.children

node.appendChild(text)
container.appendChild(node)
```

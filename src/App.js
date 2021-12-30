import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class Board2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div onClick={() => this.setState({ count: this.state.count + 1 })}>
        count+1
      </div>
    );
  }
}
const Test = ({ count, count1, ...otherProps }) => {
  return (
    <div>
      {count} {count1}
    </div>
  );
};
const Board = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [object, setObject] = useState({ a: 1, b: 2 });
  //   if (c) {
  //     console.log("has c");
  //   }
  console.log("object", object);
  function onClick() {
    setCount((state) => state + 1);
  }
  return (
    <>
      <div onClick={onClick}>{count}</div>
      {Object.keys(object).map((key) => (
        <div key={key}>{key}</div>
      ))}
    </>
  );
};
export default Board;

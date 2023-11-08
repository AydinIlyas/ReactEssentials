import logo from "../../logo.svg";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Essentials</h1>
      <p>
        {description} Edit <code>src/App.js</code> and save to reload.
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
  );
}

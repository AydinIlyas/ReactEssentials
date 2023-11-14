import Header from "./components/Header/Header";
import "./App.css";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;

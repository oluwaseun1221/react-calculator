import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Screen from "./components/Screen";

function App() {
  return (
    <>
      <div className="main-panel">
        <Screen />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;

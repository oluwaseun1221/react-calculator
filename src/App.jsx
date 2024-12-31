import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-panel">
        <div className="screen">0</div>
        <div className="button-panel">
          <div className="panel-row">
            <div className="button">OFF</div>
            <div className="button">C</div>
            <div className="button">%</div>
            <div className="button">/</div>
          </div>
          <div className="panel-row">
            <div className="button">7</div>
            <div className="button">8</div>
            <div className="button">9</div>
            <div className="button">x</div>
          </div>
          <div className="panel-row">
            <div className="button">4</div>
            <div className="button">5</div>
            <div className="button">6</div>
            <div className="button">-</div>
          </div>
          <div className="panel-row">
            <div className="button">1</div>
            <div className="button">2</div>
            <div className="button">3</div>
            <div className="button">+</div>
          </div>
          <div className="panel-row">
            <div className="button">0</div>
            <div className="button">.</div>
            <div className="button">=</div>
            <div className="button">+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

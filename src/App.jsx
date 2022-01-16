import * as React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import About from './About/About.jsx';
import Store from './Store/Store.jsx';
import Navbar from './About/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;

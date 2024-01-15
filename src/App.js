import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

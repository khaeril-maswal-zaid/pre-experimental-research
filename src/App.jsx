import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import DataD from "./Pages/DataD";
import DataAnalysis from "./Pages/DataCollaction";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-d" element={<DataD />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

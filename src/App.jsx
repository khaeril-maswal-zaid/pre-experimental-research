import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import DataAnalysis from "./Pages/DataCollaction";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

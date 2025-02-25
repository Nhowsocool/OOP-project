import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from 'react';
import StickyHeadTable from "./components/test.jsx";
import Nursequeue from "./components/Nursequeue.jsx";
import Nurseprofile from "./components/Nurseprofile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nursequeue" element={<Nursequeue />} />
        <Route path="/nurseprofile" element={<Nurseprofile />} />
        <Route path="/test" element={<StickyHeadTable />} />
      </Routes>
    </Router>
  );
}


export default App;
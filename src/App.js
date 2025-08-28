import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import DashboardLayout from "./AppLayout/DashboardLayout";
// import Page2 from './pages/Page2'
// import { ActivePatientProvider } from './Data/ActivePatientContext'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

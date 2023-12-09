import { Footer, Header, Menu } from "./components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { About, Donations, Main, Rituals, Trust } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div id="templatemo_content_container">
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="rituals" element={<Rituals />} />
          <Route path="trust" element={<Trust />} />
          <Route path="donations" element={<Donations />} />
          <Route path="" element={<Navigate to="main" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

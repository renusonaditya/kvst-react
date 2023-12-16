import { Footer, Header, MenuBar } from "./components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { About, Contact, Donations, Main, Rituals, Trust } from "./pages";

import "./App.scss";

const rootClassName = "app";
const appContainer = rootClassName + "__container";
const contentWrapper = appContainer + "__content-wrapper";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MenuBar />
      <div className={appContainer}>
        <div className={contentWrapper}>
          <Routes>
            <Route path="home" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="rituals" element={<Rituals />} />
            <Route path="trust" element={<Trust />} />
            <Route path="donations" element={<Donations />} />
            <Route path="" element={<Navigate to="home" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Footer, Header, Menu } from "./components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Main, Rituals } from "./pages";

function App() {
  return <BrowserRouter>
  <Header />
  <Menu />
  <Routes>
    <Route path="main" element={<Main />} />
    <Route path="rituals" element={<Rituals />} />
    <Route path="" element={<Navigate to='main' />} />
  </Routes>
  <Footer />
  </BrowserRouter>;
}

export default App;

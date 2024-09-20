import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

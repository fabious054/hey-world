import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import Default from "components/Default";
import Post from "components/Post";
import NotFound from "Pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Default/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home1 from "./Components/Pages/Home1/Home1";
import About from "./Components/Pages/About/About";
import Products from "./Components/Pages/Products/Products";
import Blogs from "./Components/Pages/Blogs/Blogs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/SharedPages/HeaderPages/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home1 />} />
        <Route path={"/home"} element={<Home1 />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

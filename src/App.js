import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home1 from "./Components/Pages/Home1/Home1";
import About from "./Components/Pages/About/About";
import Products from "./Components/Pages/Products/Products";
import Blogs from "./Components/Pages/Blogs/Blogs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/SharedPages/HeaderPages/Header";
import Home2 from "./Components/Pages/Home2/Home2";
import Shop from "./Components/Pages/Shop/Shop";
import ShopVertical from "./Components/Pages/Shop/ShopVertical";
import ShopCardHorizontal from "./Components/Pages/Shop/ShopCardHorizontal ";

function App() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path={"/"} element={<Home1 />} />
        <Route path={"/home"} element={<Home1 />} />
        <Route path={"/home2"} element={<Home2 />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<ShopVertical />}></Route>
          <Route path="1" element={<ShopVertical />}></Route>
          <Route path="2" element={<ShopCardHorizontal />}></Route>
        </Route>
        <Route path="/shop/fullwidth" element={<Shop />}>
          <Route index element={<ShopVertical />}></Route>
          <Route path="1" element={<ShopVertical />}></Route>
          <Route path="2" element={<ShopCardHorizontal />}></Route>
        </Route>
        <Route path={"/shop/:id"} element={<Shop />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

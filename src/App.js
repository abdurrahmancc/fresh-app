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
import BlogDetails from "./Components/Pages/Blogs/BlogDetails";
import Contact from "./Components/Pages/Contact/Contact";
import Faq from "./Components/Pages/Faq/Faq";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import ShoppingCart from "./Components/Pages/ShoppingCart/ShoppingCart";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
export const CartQuantity = createContext("cartQuantity");

function App() {
  const [cartQuantity, setCartQuantity] = useState([]);
  return (
    <>
      <Toaster />
      <CartQuantity.Provider value={[cartQuantity, setCartQuantity]}>
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
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/shopping-cart"} element={<ShoppingCart />} />
          <Route path={"/product-details/:id"} element={<ProductDetails />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/FAQ"} element={<Faq />} />
          <Route path={"/blog-details/:id"} element={<BlogDetails />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </CartQuantity.Provider>
    </>
  );
}

export default App;

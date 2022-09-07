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
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import RequireAuth from "./Components/SharedPages/RequireAuth/RequireAuth";
import UserDashboard from "./Components/UserDashBoard/UserDashboard";
import MyOrder from "./Components/UserDashBoard/MyOrder/MyOrder";
import MyAccount from "./Components/UserDashBoard/MyAccount/MyAccount";
import MyAddress from "./Components/UserDashBoard/MyAddress/MyAddress";
import Payment from "./Components/UserDashBoard/Payment/Payment";
import Tables from "./Components/UserDashBoard/MyOrder/Table";
import Login from "./Components/SharedPages/Login/Login";
import Register from "./Components/SharedPages/Login/Register";
import ForgotPassword from "./Components/SharedPages/Login/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/SharedPages/Login/ResetPassword/ResetPassword";
import AdminDashboard from "./Components/Pages/AdminDashboard/AdminDashboard";
import DashboardHome from "./Components/Pages/AdminDashboard/DashboardHome/DashboardHome";
import AdminDashboardSubMenu from "./Components/Pages/AdminDashboard/AdminDashboardSubMenu";
import AddProduct from "./Components/Pages/AdminDashboard/AddProduct/AddProduct";
import AddOthers from "./Components/Pages/AdminDashboard/AddOthers/AddOthers";
import AllOrder from "./Components/Pages/AdminDashboard/AllOrder/AllOrder";
import PaidOrder from "./Components/Pages/AdminDashboard/PaidOrder/PaidOrder";
import PendingOrder from "./Components/Pages/AdminDashboard/PendingOrder/PendingOrder";
import AllUsers from "./Components/Pages/AdminDashboard/AllUser/AllUser";
import AllAdmin from "./Components/UserDashBoard/AllAdmin/AllAdmin";
import Message from "./Components/Pages/AdminDashboard/Message/Message";
import Analytics from "./Components/Pages/AdminDashboard/Analytics/Analytics";
import Saved from "./Components/Pages/AdminDashboard/Saved/Saved";
import Test from "./Components/Pages/Test/Test";
export const CartQuantity = createContext("cartQuantity");
export const ToggleAdminDashboardSideBar = createContext("sideBar");

function App() {
  const [cartQuantity, setCartQuantity] = useState([]);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [dark, setDark] = useState(false);
  const [themes, setThemes] = useState("");

  const theme = localStorage.getItem("themes");
  useEffect(() => {
    setThemes(theme);
  }, [theme]);

  const handleOpen = () => {
    if (toggleSideBar) {
      setToggleSideBar(!toggleSideBar);
    }
  };
  return (
    <>
      <Toaster />
      <CartQuantity.Provider value={[cartQuantity, setCartQuantity]}>
        <ToggleAdminDashboardSideBar.Provider
          value={[toggleSideBar, setToggleSideBar, dark, setDark, handleOpen]}
        >
          <Header />
          <Routes>
            <Route path={"/"} element={<Home1 />} />
            <Route path={"/table"} element={<Tables />} />
            <Route path={"/test"} element={<Test />} />
            <Route path={"/home"} element={<Home1 />} />
            <Route path={"/home2"} element={<Home2 />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
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
            <Route path={"/checkout"} element={<CheckOut />} />
            {/* <Route path={"/admin-dashboard"} element={<AdminDashboard />} /> */}
            <Route path={"/forgot-password"} element={<ForgotPassword />} />
            <Route path={"/reset-password"} element={<ResetPassword />} />
            <Route path={"/checkout/:id"} element={<CheckOut />} />
            <Route element={<RequireAuth />}>
              <Route path="/user-dashboard" element={<UserDashboard />}>
                <Route index element={<MyOrder />} />
                <Route path="my-account" element={<MyAccount />} />
                <Route path="my-address" element={<MyAddress />} />
                <Route path="payment/:id" element={<Payment />} />
                <Route path="my-order" element={<MyOrder />} />
              </Route>
            </Route>
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/shopping-cart"} element={<ShoppingCart />} />
            <Route path={"/product-details/:id"} element={<ProductDetails />} />
            <Route path={"/blogs"} element={<Blogs />} />
            <Route path={"/FAQ"} element={<Faq />} />
            <Route path={"/blog-details/:id"} element={<BlogDetails />} />
            <Route element={<RequireAuth />}>
              {/* <Route element={<RequireNotUser />}> */}
              <Route path="/admin-dashboard" element={<AdminDashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="home-dashboard" element={<DashboardHome />} />
                <Route path="ecommerce" element={<AdminDashboardSubMenu />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="add-others" element={<AddOthers />} />
                <Route path="product-details/:id" element={<ProductDetails />} />
                {/* <Route element={<RequireAdmin />}> */}
                <Route path="all-user" element={<AllUsers />} />
                <Route path="admin" element={<AllAdmin />} />
                {/* </Route>  */}
                <Route path="all-order" element={<AllOrder />} />
                {/* <Route path="all-product" element={<AllProducts />}> */}
                {/* <Route index element={<AllProducts1 />}></Route> */}
                {/* <Route path="1" element={<AllProducts1 />}></Route> */}
                {/* <Route path="2" element={<AllProducts2 />}></Route> */}
                {/* </Route> */}
                <Route path="order-pending" element={<PendingOrder />} />
                <Route path="message" element={<Message />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="file-manager" element={<Analytics />} />
                <Route path="saved" element={<Saved />} />
                <Route path="order-paid" element={<PaidOrder />} />
              </Route>
              {/* </Route> */}
            </Route>
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </ToggleAdminDashboardSideBar.Provider>
      </CartQuantity.Provider>
    </>
  );
}

export default App;

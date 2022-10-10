import "./Components/SharedCss/share.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/SharedPages/HeaderPages/Header";
import Shop from "./Components/Pages/Shop/Shop";
import ShopVertical from "./Components/Pages/Shop/ShopVertical";
import ShopHorizontal from "./Components/Pages/Shop/ShopHorizontal ";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./Components/SharedPages/RequireAuth/RequireAuth";
import UserDashboard from "./Components/UserDashBoard/UserDashboard";
import MyOrder from "./Components/UserDashBoard/MyOrder/MyOrder";
import MyAccount from "./Components/UserDashBoard/MyAccount/MyAccount";
import MyAddress from "./Components/UserDashBoard/MyAddress/MyAddress";
import Payment from "./Components/UserDashBoard/Payment/Payment";
import Tables from "./Components/UserDashBoard/MyOrder/Table";
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
import RequireAdmin from "./Components/SharedPages/RequireAdmin/RequireAdmin";
import { publicRoutes } from "./routers/publicRoutes";
import { useSelector } from "react-redux";
import UserDashboardDetails from "./Components/UserDashBoard/userDashboardDetails/UserDashboardDetails";
export const CartQuantity = createContext("cartQuantity");
export const WishlistQuantity = createContext("wishlistQuantity");
export const CompareQuantity = createContext("compareQuantity");
export const ToggleAdminDashboardSideBar = createContext("sideBar");

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [dark, setDark] = useState(false);
  const count = useSelector((state) => state);

  const handleOpen = () => {
    if (toggleSideBar) {
      setToggleSideBar(!toggleSideBar);
    }
  };

  console.log(count);
  return (
    <>
      <Toaster />
      <ToggleAdminDashboardSideBar.Provider
        value={[toggleSideBar, setToggleSideBar, dark, setDark, handleOpen]}
      >
        <Header />
        <Routes>
          {/*--------------- public Routes --------------*/}
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component></Component>}></Route>
          ))}
          <Route path={"/table"} element={<Tables />} />
          <Route path={"/test"} element={<Test />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<ShopVertical />}></Route>
            <Route path="1" element={<ShopVertical />}></Route>
            <Route path="2" element={<ShopHorizontal />}></Route>
          </Route>
          <Route path="/shop/fullwidth" element={<Shop />}>
            <Route index element={<ShopVertical />}></Route>
            <Route path="1" element={<ShopVertical />}></Route>
            <Route path="2" element={<ShopHorizontal />}></Route>
          </Route>
          {/*--------------- require Routes --------------*/}
          <Route element={<RequireAuth />}>
            <Route path="/user-dashboard" element={<UserDashboard />}>
              <Route index element={<UserDashboardDetails />} />
              <Route path="my-account" element={<MyAccount />} />
              <Route path="my-address" element={<MyAddress />} />
              <Route path="payment/:id" element={<Payment />} />
              <Route path="my-order" element={<MyOrder />} />
              <Route path="user-dashboard-details" element={<UserDashboardDetails />} />
            </Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route element={<RequireAdmin />}>
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
                <Route path="order-pending" element={<PendingOrder />} />
                <Route path="message" element={<Message />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="file-manager" element={<Analytics />} />
                <Route path="saved" element={<Saved />} />
                <Route path="order-paid" element={<PaidOrder />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </ToggleAdminDashboardSideBar.Provider>
    </>
  );
}

export default App;

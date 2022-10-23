import "./Components/SharedCss/share.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/SharedPages/HeaderPages/Header";
import Shop from "./Components/Pages/Shop/Shop";
import ShopVertical from "./Components/Pages/Shop/ShopVertical";
import ShopHorizontal from "./Components/Pages/Shop/ShopHorizontal ";
import RequireAuth from "./Components/SharedPages/RequireAuth/RequireAuth";
import UserDashboard from "./Components/UserDashBoard/UserDashboard";
import RequireAdmin from "./Components/SharedPages/RequireAdmin/RequireAdmin";
import { publicRoutes } from "./routes/publicRoutes";
import UserDashboardDetails from "./Components/UserDashBoard/userDashboardDetails/UserDashboardDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "./Components/adminDashboard/DashboardHome/DashboardHome";
import AdminDashboard from "./Components/adminDashboard/AdminDashboard";
import { adminDashboardRoutes, userDashboardRoutes } from "./routes/privetRoutes";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        {/*--------------- public Routes --------------*/}
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component></Component>}></Route>
        ))}

        {/*---------------- shop page -------------*/}
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

        {/*--------------- require user dashboard Routes --------------*/}
        <Route element={<RequireAuth />}>
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route index element={<UserDashboardDetails />} />
            {userDashboardRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
          </Route>
        </Route>

        {/*--------------- require admin dashboard Routes --------------*/}
        <Route element={<RequireAuth />}>
          <Route element={<RequireAdmin />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<DashboardHome />} />
              {adminDashboardRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

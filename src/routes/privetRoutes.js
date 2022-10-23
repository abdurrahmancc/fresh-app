import AddOthers from "../Components/adminDashboard/addOthers/AddOthers";
import AddProduct from "../Components/adminDashboard/addProduct/AddProduct";
import AdminDashboardSubMenu from "../Components/adminDashboard/AdminDashboardSubMenu";
import AllAdmin from "../Components/adminDashboard/allAdmin/AllAdmin";
import AllOrder from "../Components/adminDashboard/allOrder/AllOrder";
import AllUsers from "../Components/adminDashboard/allUser/AllUser";
import Analytics from "../Components/adminDashboard/Analytics/Analytics";
import DashboardHome from "../Components/adminDashboard/DashboardHome/DashboardHome";
import Message from "../Components/adminDashboard/Message/Message";
import PaidOrder from "../Components/adminDashboard/paidOrder/PaidOrder";
import PendingOrder from "../Components/adminDashboard/pendingOrder/PendingOrder";
import Saved from "../Components/adminDashboard/Saved/Saved";
import ProductDetails from "../Components/Pages/Products/ProductDetails";
import MyAccount from "../Components/UserDashBoard/MyAccount/MyAccount";
import MyAddress from "../Components/UserDashBoard/MyAddress/MyAddress";
import MyOrder from "../Components/UserDashBoard/MyOrder/MyOrder";
import Payment from "../Components/UserDashBoard/Payment/Payment";
import UserDashboardDetails from "../Components/UserDashBoard/userDashboardDetails/UserDashboardDetails";

/*============= user Dashboard Routes ===============*/
export const userDashboardRoutes = [
  { path: "my-account", Component: MyAccount },
  { path: "my-address", Component: MyAddress },
  { path: "payment/:id", Component: Payment },
  { path: "my-order", Component: MyOrder },
  { path: "user-dashboard-details", Component: UserDashboardDetails },
];

/* ============= admin Dashboard Routes ================= */
export const adminDashboardRoutes = [
  { path: "home-dashboard", Component: DashboardHome },
  { path: "ecommerce", Component: AdminDashboardSubMenu },
  { path: "add-product", Component: AddProduct },
  { path: "add-others", Component: AddOthers },
  { path: "product-details/:id", Component: ProductDetails },
  { path: "all-user", Component: AllUsers },
  { path: "admin", Component: AllAdmin },
  { path: "all-order", Component: AllOrder },
  { path: "order-pending", Component: PendingOrder },
  { path: "message", Component: Message },
  { path: "analytics", Component: Analytics },
  { path: "file-manager", Component: Analytics },
  { path: "saved", Component: Saved },
  { path: "order-paid", Component: PaidOrder },
];

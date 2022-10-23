import About from "../Components/Pages/About/About";
import BlogDetails from "../Components/Pages/Blogs/BlogDetails";
import Blogs from "../Components/Pages/Blogs/Blogs";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import Compare from "../Components/Pages/compare/Compare";
import Contact from "../Components/Pages/Contact/Contact";
import Faq from "../Components/Pages/Faq/Faq";
import Home1 from "../Components/Pages/Home1/Home1";
import NotFound from "../Components/Pages/NotFound/NotFound";
import ProductDetails from "../Components/Pages/Products/ProductDetails";
import Products from "../Components/Pages/Products/Products";
import Shop from "../Components/Pages/Shop/Shop";
import ShoppingCart from "../Components/Pages/ShoppingCart/ShoppingCart";
import Wishlist from "../Components/Pages/wishlist/Wishlist";
import ForgotPassword from "../Components/SharedPages/Login/ForgotPassword/ForgotPassword";
import Login from "../Components/SharedPages/Login/Login";
import Register from "../Components/SharedPages/Login/Register";
import ResetPassword from "../Components/SharedPages/Login/ResetPassword/ResetPassword";

/* ============ public Routes =============== */
export const publicRoutes = [
  { path: "/", Component: Home1 },
  { path: "/home", Component: Home1 },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/FAQ", Component: Faq },
  { path: "/blogs", Component: Blogs },
  { path: "/blog-details/:id", Component: BlogDetails },
  { path: "/shop", Component: Shop },
  { path: "/shop/:id", Component: Shop },
  { path: "/products", Component: Products },
  { path: "/product-details/:id", Component: ProductDetails },
  { path: "/checkout", Component: CheckOut },
  { path: "/checkout/:id", Component: CheckOut },
  { path: "/forgot-password", Component: ForgotPassword },
  { path: "/reset-password", Component: ResetPassword },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "/shop-compare", Component: Compare },
  { path: "/shopping-cart", Component: ShoppingCart },
  { path: "/wishlist", Component: Wishlist },
  { path: "*", Component: NotFound },
];

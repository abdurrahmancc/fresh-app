import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { FaHome, FaUser } from "react-icons/fa";
import { MdAddShoppingCart, MdMessage, MdStorefront } from "react-icons/md";

export const routes = [
  {
    path: "home-dashboard",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "add-product",
    name: "E-commerce",
    icon: <MdStorefront />,
    subItems: [
      {
        path: "add-product",
        name: "Add Product",
      },
      {
        path: "add-others",
        name: "Add Others",
      },
    ],
  },
  {
    path: "all-order",
    name: "Order",
    icon: <MdAddShoppingCart />,
    subItems: [
      {
        path: "all-order",
        name: "Order",
      },
      {
        path: "order-pending",
        name: "Pending",
      },
      {
        path: "order-paid",
        name: "Paid",
      },
    ],
  },
  {
    path: "/all-user",
    name: "Users",
    icon: <FaUser />,
    subItems: [
      {
        path: "all-user",
        name: "All User",
      },
      {
        path: "admin",
        name: "Admin",
      },
    ],
  },
  {
    path: "message",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

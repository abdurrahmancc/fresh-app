import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import axiosPrivet from "../Hooks/axiosPrivet";

const userNamesById = { 1: "Grid", 2: "List" };
const DynamicUserBreadcrumb = ({ match }) => <span>{userNamesById[match.params.id]}</span>;

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

const Breadcrumb = () => {
  const { id } = useParams();
  const location = useLocation();
  const [title, setTitle] = useState("");

  const routes = [
    { path: "/shop/fullwidth/", breadcrumb: "wide" },
    { path: "/shop/fullwidth/:id", breadcrumb: DynamicUserBreadcrumb },
    { path: "/shop/:id", breadcrumb: DynamicUserBreadcrumb },
    { path: "/product-details/:id", breadcrumb: title },
    { path: "/blog-details/:id", breadcrumb: null },
    { path: "/user-dashboard/payment/:id", breadcrumb: null },
    { path: "/checkout/:id", breadcrumb: location?.state },
    { path: "/", breadcrumb: "Home" },
    { path: "/shop", breadcrumb: CustomPropsBreadcrumb, props: { someProp: "Shop" } },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  let isLast = breadcrumbs[breadcrumbs.length - 1];

  useEffect(() => {
    (async () => {
      try {
        const isProductPage = location.pathname.includes("product-details") ? true : false;
        if (isProductPage) {
          const { data } = await axiosPrivet.get(`product/product-details/${id}`);
          const productName =
            data?.productName.length >= 20
              ? `${data?.productName.slice(0, 22)}...`
              : data?.productName;
          setTitle(productName);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [id, location.pathname]);

  return (
    <>
      <ul className=" flex justify-center">
        {breadcrumbs.map(({ match, breadcrumb }) => {
          const disabled =
            isLast?.match?.pathname === match?.pathname
              ? "text-gray-500 disabled-link hover:no-underline"
              : "text-primary font-semibold text-lg";
          return (
            <li key={match.pathname}>
              <NavLink className={` ${disabled}`} to={match.pathname}>
                {breadcrumb}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Breadcrumb;

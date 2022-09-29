import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const userNamesById = { 1: "unnda", 2: "panda" };
const DynamicUserBreadcrumb = ({ match }) => <span>{userNamesById[match.params.userId]}</span>;

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  { path: "/shop/:userId", breadcrumb: DynamicUserBreadcrumb },
  { path: "/", breadcrumb: "Home" },
  { path: "/shop", breadcrumb: CustomPropsBreadcrumb, props: { someProp: "Shop" } },
];

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  let isLast = breadcrumbs[breadcrumbs.length - 1];
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

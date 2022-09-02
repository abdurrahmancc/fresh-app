import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Hooks/useAuthState";
import emptyUser from "../../assets/logo/empty-user.png";
import Breadcrumb from "../SharedPages/Breadcrumb";
import Footer from "../SharedPages/Footer/Footer";
import Loading from "../SharedPages/Loading";
import Newsletters from "../SharedPages/Newsletters/Newsletters";
import { NavLink, Outlet } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import "./userDashboard.css";

const UserDashboard = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  // console.log(user);
  return (
    <>
      <main className="">
        {/* Breadcrumb start */}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/* Breadcrumb end */}
        <section className="container mx-auto mt-5">
          <div className="flex lg:flex-row flex-col">
            <div className=" lg:min-h-[80vh]">
              <ul className="menu lg:w-[290px] h-full m-5 rounded-lg overflow-y-auto dashboardBodyShadow bg-white text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li className="bg-primary mb-4">
                  <div className="p-10 flex flex-col">
                    <div className="avatar online mx-auto">
                      <div className="w-24 rounded-full">
                        <img
                          src={user?.photoURL ? user?.photoURL : emptyUser}
                          className={"mx-auto"}
                          alt="user_logo"
                        />
                      </div>
                    </div>
                    <h5 className="text-neutral font-bold text-xl">{user?.displayName}</h5>
                  </div>
                </li>
                <li>
                  <NavLink
                    to={"/user-dashboard/my-account"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg text-neutral bg-primary px-10 rounded-none"
                        : "text-lg px-10 rounded-none"
                    }
                  >
                    <BiUser />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/user-dashboard/my-order"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg text-neutral bg-primary px-10 rounded-none"
                        : "text-lg px-10 rounded-none"
                    }
                  >
                    <span>
                      <MdAddShoppingCart />
                    </span>{" "}
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/user-dashboard/my-address"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg text-neutral bg-primary px-10 rounded-none"
                        : "text-lg px-10 rounded-none"
                    }
                  >
                    <span>
                      <IoLocationOutline />
                    </span>{" "}
                    My Address
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </section>
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
      </main>
      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------ footer end -------*/}
    </>
  );
};

export default UserDashboard;

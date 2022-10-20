import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";

const UserDashboardDetails = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-full h-full">
        <div className="m-5 h-full dashboardBodyShadow rounded-lg lg:min-h-[80vh]">
          <div className={`flex rounded-t-lg justify-between px-10 py-5 border-b`}>
            <h4 className="text-3xl font-semibold">Dashboard</h4>
          </div>
          <div className="p-10 ">
            <h5 className="text-3xl font-semibold pb-4 text-center">Hello {user?.displayName}!</h5>
            <div>
              <p className="text-[16px] text-center leading-6 py-4 text-[#7E7E7E]">
                From the dashboard of your account. You can easily view and manage your{" "}
                <a href="/user-dashboard/my-order" className="text-primary">
                  recent orders
                </a>
                , <br className="hidden xl:block" /> manage your{" "}
                <a href="/user-dashboard/my-address" className="text-primary">
                  shipping and billing addresses
                </a>
                , and{" "}
                <a href="/forgot-password" className="text-primary">
                  change your password
                </a>{" "}
                and{" "}
                <a href="/user-dashboard/my-account" className="text-primary">
                  account information
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardDetails;

import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import auth from "../../Hooks/useAuthState";
import Loading from "../Loading";

const RequireAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [admin, adminLoading] = useAdmin(user);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loading || adminLoading) {
    return <Loading />;
  }
  // console.log(token);

  if (!user || !admin) {
    handleSignOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAdmin;

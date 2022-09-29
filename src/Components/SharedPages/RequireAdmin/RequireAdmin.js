import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import auth from "../../Hooks/useAuthState";
import Loading from "../Loading";

const RequireAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    handleSignOut();
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default RequireAdmin;

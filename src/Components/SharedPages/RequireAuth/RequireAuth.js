import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import auth from "../../Hooks/useAuthState";
import useToken from "../../Hooks/useToken";
import Loading from "../Loading";

const RequireAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const [token, tokenLoading, setTokenLoading] = useToken(user);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  if (loading) {
    return <Loading />;
  }
  // console.log(token);

  if (!user) {
    handleSignOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;

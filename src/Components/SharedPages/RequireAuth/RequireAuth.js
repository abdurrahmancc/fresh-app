import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import auth from "../../Hooks/useAuthState";
import { accessToken, removeCookie } from "../../Hooks/useCookies";
import useValidToken from "../../Hooks/useValidToken";
import Loading from "../Loading";

const RequireAuth = () => {
  const [user, loading] = useAuthState(auth);
  const [isValidToken, tokenLoading] = useValidToken(user);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth);
    removeCookie(accessToken);
  };

  if (loading || tokenLoading) {
    return <Loading />;
  }

  if (!user) {
    handleSignOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;

import { signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axiosPrivet from "./axiosPrivet";
import auth from "./useAuthState";
import { accessToken, removeCookie } from "./useCookies";

const useValidToken = (user) => {
  const [tokenLoading, setTokenLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const email = user?.email || user?.user?.email;
  const location = useLocation();

  useEffect(() => {
    (async () => {
      if (email) {
        try {
          setTokenLoading(true);
          const { data } = await axiosPrivet.get(`login/isValidToken`);
          setIsValidToken(data?.admin);
          setTokenLoading(false);
        } catch (error) {
          if (error?.response?.status === (401 || 403)) {
            removeCookie(accessToken);
            signOut(auth);
            return <Navigate to="/login" state={{ from: location }} replace />;
          }
          setIsValidToken(false);
          setTokenLoading(false);
        }
      }
      setTokenLoading(false);
    })();
  }, [email, location]);

  return [isValidToken, tokenLoading];
};

export default useValidToken;

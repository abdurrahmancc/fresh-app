import { format } from "date-fns";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivet from "./axiosPrivet";
import auth from "./useAuthState";
import { accessTokenName, getCookie } from "./useCookies";

const useToken = (user) => {
  const [tokenLoading, setTokenLoading] = useState(true);
  const [token, setToken] = useState(false);
  const email = user?.email || user?.user?.email;
  const displayName = user?.displayName || user?.user?.displayName;

  useEffect(() => {
    (async () => {
      if (email && displayName) {
        const cookieToken = getCookie(accessTokenName);
        setToken(cookieToken);
      }
      if (!user) {
        setTokenLoading(false);
      }
    })();
  }, [user, email, displayName]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axiosPrivet.get("login/isValidToken");
  //     console.log(data);
  //     if (!data?.message) {
  //       setToken(false);
  //     } else if (data?.message) {
  //       setToken(true);
  //     }
  //   })();
  // }, []);

  return [token, tokenLoading, setTokenLoading];
};

export default useToken;

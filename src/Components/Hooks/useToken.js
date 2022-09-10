import { format } from "date-fns";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivet from "./axiosPrivet";
import auth from "./useAuthState";
import { accessTokenName, getCookie } from "./useCookies";

const useToken = (user) => {
  const [tokenLoading, setTokenLoading] = useState(false);
  const [token, setToken] = useState(false);
  const accessToken = getCookie(accessTokenName);
  const email = user?.email || user?.user?.email;

  // useEffect(() => {
  //   (async () => {
  //     if (email) {
  //       const cookieToken = getCookie(accessTokenName);
  //       setToken(cookieToken);
  //     } else {
  //       setTokenLoading(false);
  //     }
  //   })();
  // }, [email]);

  useEffect(() => {
    (async () => {
      if (email) {
        try {
          setTokenLoading(true);
          const { data } = await axiosPrivet.get(`login/isValidToken`);
          setToken(data?.admin);
          setTokenLoading(false);
        } catch (error) {
          setToken(false);
          setTokenLoading(false);
        }
      }
    })();
  }, [email]);

  return [token, tokenLoading, setTokenLoading];
};

export default useToken;

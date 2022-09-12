import { format } from "date-fns";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivet from "./axiosPrivet";
import auth from "./useAuthState";
import { accessToken, getCookie } from "./useCookies";

const useToken = (user) => {
  const [tokenLoading, setTokenLoading] = useState(false);
  const [token, setToken] = useState(false);
  // const accesstoken = getCookie(accessToken);
  const email = user?.email || user?.user?.email;

  // useEffect(() => {
  //   (async () => {
  //     if (email) {
  //       const cookieToken = getCookie(accessToken);
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

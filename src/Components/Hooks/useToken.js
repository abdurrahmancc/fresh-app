import { format } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivet from "./axiosPrivet";

const useToken = (user) => {
  const [tokenLoading, setTokenLoading] = useState(true);
  const [fullDate] = useState(new Date());
  const formattedDate = format(fullDate, "PP");
  const timeDate = format(fullDate, "MMMM d, yyyy h:mm aa");
  const [token, setToken] = useState("");
  const email = user?.email || user?.user?.email;
  const displayName = user?.displayName || user?.user?.displayName;
  const photoURL = user?.photoURL || user?.user?.photoURL || "";
  // console.log(user);
  const currentUser = {
    email: email,
    displayName: displayName,
    photoURL: photoURL,
    joiningDate: formattedDate,
    lastLoginDate: timeDate,
  };

  useEffect(() => {
    (async () => {
      if (email && displayName) {
        const { data } = await axiosPrivet.put(`user/${email}`, currentUser);
        if (data?.result.acknowledged || data?.token) {
          // console.log(data?.token);
          localStorage.setItem("accessToken", data?.token);
          setToken(data?.token);
          setTokenLoading(false);
        } else {
          setTokenLoading(false);
        }
      }
      if (!user) {
        setTokenLoading(false);
      }
    })();
  }, [user, email, displayName, currentUser]);

  return [token, tokenLoading, setTokenLoading];
};

export default useToken;

import React, { useEffect, useState } from "react";
import axiosPrivet from "./axiosPrivet";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email || user?.user?.email;
    (async () => {
      if (email) {
        try {
          const { data } = await axiosPrivet.get(`login/admin/${email}`);
          setAdmin(data?.admin);
          setAdminLoading(false);
        } catch (error) {
          setAdmin(false);
          setAdminLoading(false);
        }
      }
    })();
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;

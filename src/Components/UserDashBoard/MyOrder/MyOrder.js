import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import MyOrderDetailsModal from "./MyOrderDetailsModal";
import MyOrderTable from "./MyOrderTable";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [myOrderModal, setMyOrderModal] = useState(null);

  const { data, isLoading } = useQuery("userOrders", () =>
    axiosPrivet.get(`order/userOrder/${user?.email}`)
  );

  if (loading || isLoading) {
    return <Loading />;
  }

  let isLast = data?.data[data?.data.length - 1];
  return (
    <>
      {data?.data.length >= 1 ? (
        <div className="w-full">
          <div className="m-5 dashboardBodyShadow rounded-lg lg:min-h-[80vh]">
            <div
              className={`flex bg-primary rounded-t-lg justify-between px-10 py-5 ${
                isLast ? "" : "border-b"
              }`}
            >
              <h4 className="text-3xl text-white font-semibold">My Orders</h4>
            </div>
            <div className="p-10 ">
              <div className="shadow-md border">
                <Table className=" w-full">
                  {/* <!-- head --> */}
                  <Thead className="bg-primary">
                    <Tr className=" sm:text-white ">
                      <Th className="font-bold px-2 sm:text-center py-5 text-lg ">#</Th>
                      <Th className="font-bold text-start py-5 text-lg">Order ID</Th>
                      <Th className="font-bold text-start py-5 text-lg">Date</Th>
                      <Th className="font-bold text-start py-5 text-lg">Total</Th>
                      <Th className="font-bold text-start py-5 text-lg">Payment </Th>
                      <Th className="font-bold text-start py-5 text-lg">Status</Th>
                      <Th className="font-bold text-start py-5 text-lg">Transaction</Th>
                      <Th className="font-bold text-center py-5 text-lg">Details</Th>
                    </Tr>
                  </Thead>
                  <Tbody id="order_Table_Row" className="cursor-pointer rounded-none">
                    {data?.data.map((order, index) => (
                      <MyOrderTable
                        Tr={Tr}
                        Td={Td}
                        Th={Th}
                        key={order?._id}
                        order={order}
                        index={index}
                        setMyOrderModal={setMyOrderModal}
                      />
                    ))}
                  </Tbody>
                  {/* <!-- foot --> */}
                </Table>
                {myOrderModal && <MyOrderDetailsModal myOrderModal={myOrderModal} />}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
          <h4 className="text-4xl font-bold">There are no order</h4>
          <h4>
            <button onClick={() => window.history.back()} className="btn btn-primary text-neutral">
              Return to Back Page
            </button>
          </h4>
        </div>
      )}
    </>
  );
};

export default MyOrder;

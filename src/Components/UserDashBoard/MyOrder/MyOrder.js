import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import MyOrderDetailsModal from "./MyOrderDetailsModal";
import MyOrderTable from "./MyOrderTableRow";
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

  console.log(data, user);
  return (
    <>
      {data?.data.length >= 1 ? (
        <div className="w-full h-full">
          <div className="m-5 h-full dashboardBodyShadow rounded-lg lg:min-h-[80vh]">
            <div className={`flex rounded-t-lg justify-between px-10 py-5 border-b`}>
              <h4 className="text-3xl font-semibold">My Orders</h4>
            </div>
            <div className="p-10 ">
              <div className="border">
                <Table className="w-full">
                  {/* <!-- head --> */}
                  <Thead className="bg-[#F3F3F3] border-b-2 border-b-primary text-[#070815]">
                    <Tr className="">
                      <Th className="font-semibold px-2 sm:text-center py-5 text-[17px]">#</Th>
                      <Th className="font-semibold text-start py-5 text-[17px]">Order ID</Th>
                      <Th className="font-semibold text-start py-5 text-[17px]">Date</Th>
                      <Th className="font-semibold text-start py-5 text-[17px]">Total</Th>
                      <Th className="font-semibold text-start py-5 text-[17px]">Payment </Th>
                      <Th className="font-semibold text-start py-5 text-[17px]">Status</Th>
                      <Th className="font-semibold text-start py-5 text-[17px]">Transaction</Th>
                      <Th className="font-semibold text-center py-5 text-[17px]">Details</Th>
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
            <button
              onClick={() => window.history.back()}
              className="text-white duration-300 transition-all ease-in-out flex items-center gap-3 btn-animate hover:bg-[#60880f] bg-primary rounded-full font-semibold uppercase py-4 mx-auto text-center text-lg px-8"
            >
              Return to back page
            </button>
          </h4>
        </div>
      )}
    </>
  );
};

export default MyOrder;

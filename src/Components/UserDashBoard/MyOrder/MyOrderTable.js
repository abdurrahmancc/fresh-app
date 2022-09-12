import { format } from "date-fns";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MyOrderTable = ({ order, index, setMyOrderModal, Td, Tr }) => {
  const navigate = useNavigate();
  let orderDate;
  if (order?.createdAt) {
    orderDate = format(new Date(order?.createdAt), "PP");
  }

  const totalPrice = order?.totalPrice ? parseFloat(order?.totalPrice) : null;

  return (
    <>
      <Tr className="hover:bg-gray-100 border-b border-gray-300">
        <Td className={"sm:py-3 text-center "}>{index + 1}</Td>
        <Td>
          <span title={order?._id}>{order?._id.slice(0, 10)}...</span>
        </Td>
        <Td>{orderDate && orderDate}</Td>
        <Td>${totalPrice && totalPrice.toFixed(2)}</Td>
        <Td>
          {order?.totalPrice && !order?.paid && (
            <span
              onClick={() => navigate(`/user-dashboard/payment/${order?._id}`)}
              className="btn px-3 font-normal btn-warning text-neutral rounded-full btn-xs capitalize"
            >
              Pay Now
            </span>
          )}
          {order?.totalPrice && order?.paid && (
            <span className="btn px-6 font-normal text-white btn-primary btn-xs rounded-full capitalize">
              Paid
            </span>
          )}
        </Td>

        <Td>{order?.status ? order?.status : "pending"}</Td>
        <Td title={order?.transactionId} className={""}>
          {order?.transactionId ? (
            order?.transactionId.slice(0, 10)
          ) : (
            <span className={"relative sm:left-10"}>...</span>
          )}
        </Td>
        <Td>
          <label htmlFor="myOrderDetails" className="cursor-pointer">
            <BsInfoCircleFill
              onClick={() => setMyOrderModal(order?.orderInfo)}
              title="Details"
              className="text-xl sm:mx-auto"
            />
          </label>
        </Td>
      </Tr>
    </>
  );
};

export default MyOrderTable;

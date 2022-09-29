import { format } from "date-fns";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MyOrderTableRow = ({ order, index, setMyOrderModal, Td, Tr }) => {
  const navigate = useNavigate();
  let orderDate;
  if (order?.createdAt) {
    orderDate = format(new Date(order?.createdAt), "PP");
  }

  const totalPrice = order?.totalPrice ? parseFloat(order?.totalPrice) : null;

  return (
    <>
      <Tr className="border-b border-gray-300">
        <Td className={"sm:py-3 text-center text-sm"}>{index + 1}</Td>
        <Td className="text-sm">
          <span title={order?._id}>{order?._id.slice(0, 10)}...</span>
        </Td>
        <Td className="text-sm">{orderDate && orderDate}</Td>
        <Td className="text-sm">${totalPrice && totalPrice.toFixed(2)}</Td>
        <Td>
          {order?.totalPrice && !order?.paid && (
            <span
              onClick={() => navigate(`/user-dashboard/payment/${order?._id}`)}
              className="btn px-3 font-normal btn-warning text-neutral rounded-full btn-xs text-sm capitalize"
            >
              Pay Now
            </span>
          )}
          {order?.totalPrice && order?.paid && (
            <span className="px-[27px] font-normal text-primary text-sm bg-[#EFF6EA] rounded-full py-[2.5px] capitalize">
              Paid
            </span>
          )}
        </Td>

        <Td className="text-sm">{order?.status ? order?.status : "pending"}</Td>
        <Td title={order?.transactionId} className={"text-sm"}>
          {order?.transactionId ? (
            order?.transactionId.slice(0, 10)
          ) : (
            <span className={"relative sm:left-10 text-sm"}>...</span>
          )}
        </Td>
        <Td className="text-sm">
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

export default MyOrderTableRow;

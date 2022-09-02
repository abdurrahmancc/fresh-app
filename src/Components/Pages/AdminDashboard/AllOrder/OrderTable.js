import React, { useState } from "react";
import OrderDeleteModal from "./OrderDeleteModal";
import OrderDetails from "./OrderDetails";
import "./OrderTable.css";
import OrderTableRow from "./OrderTableRow";

const OrderTable = ({
  orders,
  refetch,
  orderDeleteModal,
  reset,
  setOrderDeleteModal,
  orderDetailModal,
  setOrderDetailModal,
}) => {
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Billing Details</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {orders &&
              orders.map((order, index) => (
                <OrderTableRow
                  key={order?._id}
                  index={index}
                  order={order}
                  setOrderDeleteModal={setOrderDeleteModal}
                  setOrderDetailModal={setOrderDetailModal}
                />
              ))}
          </tbody>
        </table>
        <OrderDeleteModal
          orderDeleteModal={orderDeleteModal}
          setOrderDeleteModal={setOrderDeleteModal}
          refetch={refetch}
          reset={reset}
        />
        {orderDetailModal && <OrderDetails orderDetailModal={orderDetailModal} />}
      </div>
    </div>
  );
};

export default OrderTable;

import React from "react";
import { useState } from "react";
import OrderStatusModal from "./OrderStatusModal";
import PaidOrderTableRow from "./PaidOrderTableRow";

const PaidOrderTable = ({ paidOrders, setPaidDeleteModal, refetch }) => {
  const [statusModal, setStatusModal] = useState(null);
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Phone / Email</th>
              <th>Rating</th>
              <th>Total Paid</th>
              <th>status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {/* <!-- row  --> */}
            {paidOrders &&
              paidOrders.map((paidOrder, index) => (
                <PaidOrderTableRow
                  key={paidOrder?._id}
                  index={index}
                  paidOrder={paidOrder}
                  setPaidDeleteModal={setPaidDeleteModal}
                  setStatusModal={setStatusModal}
                />
              ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
        {statusModal && (
          <OrderStatusModal
            statusModal={statusModal}
            setStatusModal={setStatusModal}
            refetch={refetch}
          ></OrderStatusModal>
        )}
      </div>
    </div>
  );
};

export default PaidOrderTable;

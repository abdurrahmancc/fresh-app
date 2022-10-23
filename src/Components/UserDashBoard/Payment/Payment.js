import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Loading from "../../SharedPages/Loading";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./paymentCard.css";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Payment = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["orderInfo", id], () => axiosPrivet.get(`order/${id}`));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="hero min-h-[60vh]">
        <div className="hero-content flex-col gap-12">
          <div className="card w-96 bg-base-100 paymentCardShadow ">
            <div className="card-body py-14 w-full">
              <h2 className="card-title pb-2 text-success ">
                Hello, {data?.data?.firstName} {data?.data?.lastName}
              </h2>
              <p className="text-lg font-semibold">
                please pay: $
                {data?.data?.totalPrice && parseFloat(data?.data?.totalPrice).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 paymentCardShadow">
            <div className="card-body py-14 w-full">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  price={data?.data?.totalPrice}
                  userEmail={data?.data?.userEmail}
                  firstName={data?.data?.firstName}
                  id={data?.data?._id}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="m-5 shadow-md">
            <div className={"flex bg-primary text-neutral justify-between px-10"}>
              <h4 className="uppercase w-full text-lg py-2 font-semibold text-center">
                Testing Card
              </h4>
            </div>
            <div className=" ">
              <div className="border-x">
                {/* ========= table start ====== */}
                <Table className=" w-full">
                  {/* <!-- head --> */}
                  <Thead className="">
                    <Tr className="border-b">
                      <Th className="font-semibold text-start py-2 pl-5">BRAND</Th>
                      <Th className="font-semibold text-start py-2 ">NUMBER</Th>
                      <Th className="font-semibold text-start py-2 ">CVC</Th>
                      <Th className="font-semibold text-start py-2 ">DATE</Th>
                    </Tr>
                  </Thead>
                  <Tbody id="order_Table_Row" className="cursor-pointer rounded-none">
                    <Tr className="hover:bg-gray-100 border-b border-gray-300">
                      <Td className={"pl-5 py-1"}>Visa</Td>
                      <Td className={"py-1"}>4242424242424242</Td>
                      <Td className={"py-1"}>Any 3 digits</Td>
                      <Td className={"py-1"}>Any future date</Td>
                    </Tr>
                    <Tr className="hover:bg-gray-100 border-b border-gray-300">
                      <Td className={"pl-5 py-1"}>American Express</Td>
                      <Td className={"py-1"}>378282246310005</Td>
                      <Td className={"py-1"}>Any 3 digits</Td>
                      <Td className={"py-1"}>Any future date</Td>
                    </Tr>
                    <Tr className="hover:bg-gray-100 border-b border-gray-300">
                      <Td className={"pl-5 py-1"}>Mastercard</Td>
                      <Td className={"py-1"}>5555555555554444</Td>
                      <Td className={"py-1"}>Any 3 digits</Td>
                      <Td className={"py-1"}>Any future date</Td>
                    </Tr>
                    <Tr className="hover:bg-gray-100">
                      <Td className={"pl-5 py-1"}>Discover</Td>
                      <Td className={"py-1"}>6011111111111117</Td>
                      <Td className={"py-1"}>Any 3 digits</Td>
                      <Td className={"py-1"}>Any future date</Td>
                    </Tr>
                  </Tbody>
                  {/* <!-- foot --> */}
                </Table>
                {/* ========= table end ====== */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

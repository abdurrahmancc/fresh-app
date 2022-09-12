import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/useAuthState";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Loading from "../../SharedPages/Loading";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = ({ id, price, userEmail, firstName }) => {
  const [user, loading] = useAuthState(auth);
  const [fullDate] = useState(new Date());
  const timeDate = format(fullDate, "MMMM d, yyyy h:mm aa");
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.post("payment/create-payment-intent", { price: price });
      if (data.clientSecret) {
        setClientSecret(data?.clientSecret);
      }
    })();
  }, [price]);

  if (loading) {
    return <Loading />;
  }

  if (!id) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error?.message);
      console.log(error);
    } else {
      setCardError(" ");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: userEmail,
          name: firstName,
        },
      },
    });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError(" ");
      setTransactionId(paymentIntent?.id);
      setSuccess("Congrats! Your Payment is Success");
      const payment = {
        orderId: id,
        transactionId: paymentIntent?.id,
        paidDate: timeDate,
        userName: user?.displayName,
        totalPaid: price,
        email: user?.email,
      };

      await axiosPrivet.patch(`payment/${id}`, payment);
      setProcessing(false);
      toast.success("Payment Success", { id: "payment-success" });
      navigate("user-dashboard/my-order");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn px-4 rounded btn-primary btn-sm text-neutral mt-[21px]"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {processing && <p className="text-success label-text-alt font-semibold">Loading...</p>}
      {cardError && <p className="text-red-500 label-text-alt"> {cardError}</p>}
      {success && (
        <div>
          <p>{success}</p>
          <p className="text-success label-text-alt font-semibold">{transactionId}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

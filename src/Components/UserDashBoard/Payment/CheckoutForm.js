import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/useAuthState";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Loading from "../../SharedPages/Loading";

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
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.post("create-payment-intent", { price: price });
      if (data.clientSecret) {
        setClientSecret(data?.clientSecret);
      }
    })();
  }, [price]);

  if (loading) {
    return <Loading />;
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

      const { data } = await axiosPrivet.patch(`order/${id}`, payment);
      console.log(data);
      setProcessing(false);
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
          className="btn btn-primary btn-sm text-neutral mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 label-text-alt"> {cardError}</p>}
      {success && (
        <div>
          <p>{success}</p>
          <p className="text-success label-text-alt font-bold">{transactionId}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

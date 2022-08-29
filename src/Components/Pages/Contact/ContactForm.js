import { send } from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import callCenter from "../../../assets/banner_img/contact-img.png";

const ContactForm = () => {
  const serviceId = "service_spvy3lm";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send(serviceId, "template_4re6v4f", data, "3yqLbkyP3p1TnDMMq")
      .then((response) => {
        reset();
        toast.success("success", { id: "email_send" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <>
      <>
        <div class="hero max-w-[1320px] mx-auto">
          <div class="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-10">
            <div className="w-full">
              <div className="">
                <div className=" mb-4">
                  <h2 className="capitalize font-[Asul] mb-5 font-bold  text-start text-4xl ">
                    contact us
                  </h2>
                </div>
                {/* contact form start */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 items-center gap-3">
                    <div className="form-control">
                      <label className="label  pb-0">
                        {/* <span className="label-text ">Name</span> */}
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="input  input-bordered border border-gray-300 py-6  w-full "
                        {...register("name", { required: true })}
                      />
                      {errors?.name && (
                        <span className="label-text-alt text-red-500">Name is required</span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label pb-0">
                        {/* <span className="label-text ">Phone number</span> */}
                      </label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="input  input-bordered border border-gray-300 py-6 w-full "
                        {...register("number", { required: true })}
                      />
                      {errors?.number && (
                        <span className="label-text-alt text-red-500">Number is required</span>
                      )}
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label pt-4 pb-0">
                      {/* <span className="label-text ">Name</span> */}
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input  input-bordered border border-gray-300 py-6  w-full "
                      {...register("subject", { required: true })}
                    />
                    {errors?.name && (
                      <span className="label-text-alt text-red-500">Subject is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label pb-0 pt-4">
                      {/* <span className="label-text ">Email</span> */}
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input  input-bordered border border-gray-300 py-6  w-full "
                      {...register("email", {
                        required: { value: true, message: "Email is require" },
                        pattern: {
                          value:
                            /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                          message: "Provide a valid email",
                        },
                      })}
                    />
                    {errors.email?.type === "pattern" ? (
                      <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                    ) : (
                      errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                      )
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label pt-4 pb-0">
                      {/* <span className="label-text ">How can I help you?</span> */}
                    </label>
                    <textarea
                      className="textarea h-44  border border-gray-300  textarea-bordered"
                      placeholder="Tell us a little about the project..."
                      {...register("description", { required: true })}
                    ></textarea>
                    {errors?.description && (
                      <span className="label-text-alt text-red-500">Description is required</span>
                    )}
                  </div>
                  <div className="form-control mt-4">
                    <button
                      type="submit"
                      className="btn rounded w-full btn-primary border-none text-white "
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/* contact form end */}
              </div>
            </div>
            <img src={callCenter} alt="call center img" class="w-full h-full rounded shadow" />
          </div>
        </div>
      </>
    </>
  );
};

export default ContactForm;

import { send } from "@emailjs/browser";
import React from "react";
import Collapsible from "react-collapsible";
import { useForm } from "react-hook-form";
import { BsChevronDown } from "react-icons/bs";
import { toast } from "react-toastify";
import callCenter from "../../../assets/banner_img/contact-img-2.png";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import "./faq.css";

const Faq = () => {
  const serviceId = process.env.REACT_APP_CONTACT_SERVICE_ID;
  const publicKey = process.env.REACT_APP_CONTACT_PUBLIC_KEY;
  const templateId = process.env.REACT_APP_CONTACT_TEMPLATE_ID;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send(serviceId, templateId, data, publicKey)
      .then((response) => {
        reset();
        toast.success("success", { autoClose: 1000 });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <>
      <main>
        {/* Breadcrumb start */}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/* Breadcrumb end */}
        {/*------- contact form start ------*/}
        <section className="container mx-auto mt-20">
          <div className="hero max-w-[1320px] mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-10">
              <div className="w-full">
                <div className="">
                  <div className=" mb-4">
                    <h2 className="capitalize  mb-5 font-bold  text-start text-4xl ">
                      if you have any questions feel free to contact us
                    </h2>
                  </div>
                  {/* contact form start */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 items-center gap-3">
                      <div className="form-control">
                        <label className="label  pb-0"></label>
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
                        <label className="label pb-0"></label>
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
                      <label className="label pt-4 pb-0"></label>
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
                      <label className="label pb-0 pt-4"></label>
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
                          <span className="label-text-alt text-red-500">
                            {errors.email?.message}
                          </span>
                        )
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label pt-4 pb-0"></label>
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
                </div>
              </div>
              <img
                src={callCenter}
                alt="call center img"
                className="w-full h-full rounded shadow"
              />
            </div>
          </div>
        </section>
        {/*------- contact form end ------*/}
        <section className="container mx-auto mt-40 mb-20">
          <h2 className="capitalize   mb-5 font-bold  text-center text-4xl">FAQ</h2>
          <div id="faq-Collapsible" className="max-w-[1100px] mt-10 mx-auto">
            <h3 className="capitalize   mb-5 font-bold text-xl">order info:</h3>
            <div className="bg-[#f6f7f8] border hover:border-primary">
              <Collapsible
                className="w-full"
                open={true}
                trigger={[
                  `1. Lorem ipsum dolor sit amet?`,
                  <BsChevronDown key={"faq-trigger-1"} />,
                ]}
              >
                <div className="p-5 border-t border-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </div>
              </Collapsible>
            </div>
            <div className="bg-[#f6f7f8] mt-5 border hover:border-primary">
              <Collapsible
                className="w-full"
                open={false}
                trigger={[
                  `2. Lorem ipsum dolor sit amet ?
`,
                  <BsChevronDown key={"faq-trigger-2"} />,
                ]}
              >
                <div className="p-5 border-t border-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </div>
              </Collapsible>
            </div>
            <div className="bg-[#f6f7f8] mt-5 border hover:border-primary">
              <Collapsible
                className="w-full"
                open={false}
                trigger={[
                  `3. Lorem ipsum dolor sit amet ?
`,
                  <BsChevronDown key={"faq-trigger-3"} />,
                ]}
              >
                <div className="p-5 border-t border-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </div>
              </Collapsible>
            </div>
            <div className="bg-[#f6f7f8] mt-5 border hover:border-primary">
              <Collapsible
                className="w-full"
                open={false}
                trigger={[
                  `4. Lorem ipsum dolor sit amet ?
`,
                  <BsChevronDown key={"faq-trigger-4"} />,
                ]}
              >
                <div className="p-5 border-t border-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </div>
              </Collapsible>
            </div>
            <div className="bg-[#f6f7f8] mt-5 border hover:border-primary">
              <Collapsible
                className="w-full"
                open={false}
                trigger={[
                  `5. Lorem ipsum dolor sit amet ?
`,
                  <BsChevronDown key={"faq-trigger-5"} />,
                ]}
              >
                <div className="p-5 border-t border-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </div>
              </Collapsible>
            </div>
            <div className="bg-[#f6f7f8] mt-5 border hover:border-primary">
              <Collapsible
                className="w-full"
                open={false}
                trigger={[
                  `6. Lorem ipsum dolor sit amet ?
`,
                  <BsChevronDown key={"faq-trigger-6"} />,
                ]}
              >
                <div className="p-5 border-t border-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </div>
              </Collapsible>
            </div>
          </div>
        </section>
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
        {/*---------- scroll button start ---------*/}
        <ScrollBtn />
        {/*---------- scroll button end ---------*/}
      </main>
      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------ footer end -------*/}
    </>
  );
};

export default Faq;

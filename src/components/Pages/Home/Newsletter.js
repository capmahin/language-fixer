import React, { useRef } from "react";
import bgDot from "../../../assets/darkblueBG.jpg";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x80om3b",
        "template_lbny2xi",
        e.target,
        "_HIv6dlM376cexXJB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      style={{
        background: `url(${bgDot})`,
      }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary my-6">
          Newsletter Subscribe
        </p>
        <h1 className="text-5xl font-bold ">
          Subscribe Our Newsletter To <br /> Get More Update
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 justify-items-center gap-5">
          <input
            type="text"
            required
            name="user_email"
            placeholder="Email Address"
            className="input w-full max-w-md"
          />
          <input
            type="text"
            required
            name="subject"
            placeholder="Subject"
            className="input w-full max-w-md"
          />
          <textarea
            name="message"
            required
            className="textarea w-full max-w-md"
            placeholder="Your message"
            rows={6}
          ></textarea>
          <input
            type="submit"
            value="Subscribe Now"
            className="btn btn-outline btn-sm btn-accent w-full my-5 max-w-xs text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;

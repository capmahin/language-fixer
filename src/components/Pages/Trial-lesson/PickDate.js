import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import emailjs from "@emailjs/browser";

const PickDate = () => {
  const [selected, setSelected] = useState(new Date());
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whcwqre",
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
    <div>
      <div className="w-3/4 lg:w-2/4 card text-gray-300 mx-auto my-12 pt-5 lg:p-12 bg-gray-700 text-center">
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="text-xs lg:text-sm m-auto">
            <DayPicker
              className="m-auto"
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            class="form-control w-3/4 lg:w-2/4 mx-auto text-black"
          >
            <label class="label">
              <span class="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Type Name"
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <label class="label">
              <span class="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              name="user_email"
              required
              placeholder="Type Email"
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <label class="label">
              <span class="label-text text-white">Selected Date</span>
            </label>
            <input
              type="text"
              disabled
              name={"date" - format(selected, "PP")}
              value={format(selected, "PP")}
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <label class="label">
              <span class="label-text text-white">Language</span>
            </label>
            <input
              type="text"
              name="language"
              required
              // value={(selected.langu)}
              placeholder="Type Language"
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <input
              type="submit"
              class="btn btn-sm btn-primary w-full my-5 max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PickDate;

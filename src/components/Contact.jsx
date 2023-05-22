import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_5qbj7di",
        "template_f7aw7bm",
        form.current,
        "ohD-4r8RW8LVy7_Sz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div
      className="h-screen bg-black w-full text-white -mt-1 lg:mt-0"
      name="Contact"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl inline border-b-2">Contact</h1>
        <p className="py-10 text-lg">Enter your message here to contact me</p>
        <div className="flex justify-center items-center">
          <form
            action=""
            className="flex flex-col justify-center w-full md:w-1/2"
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-lg border-slate-800 outline-none focus:outline-none"
              name="user_name"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-lg border-slate-800 outline-none focus:outline-none"
              name="user_email"
            />
            <textarea
              placeholder="Enter your message"
              cols={20}
              rows={10}
              className="p-2 bg-transparent border-2 rounded-lg border-slate-800 outline-none focus:outline-none"
              name="message"
            />
            <button
              type="submit"
              className="relative left-1/2 -translate-x-1/2 mt-12 w-fit px-6 py-3 bg-gradient-to-l from-cyan-500 to-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-screen-lg w-1/2 h-[1px] mx-auto bg-white mt-20 lg:mt-4"></div>
    </div>
  );
};

export default Contact;

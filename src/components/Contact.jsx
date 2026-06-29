import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_26a55zq",
      "template_xcmpcpl",
      form.current,
      "0le5IJvnHNuy7JYhk"
    )
    .then(
      () => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        alert(error.text||error.message);
        console.log(error);
      }
    );
};
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Let's Connect 👋
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl"/>
                <span>anilsinghyadav954@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl"/>
                <span>+91 9140004582</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl"/>
                <span>Mirzapur, Uttar Pradesh</span>
              </div>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a
                href="https://github.com/anilsinghyadav954"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 transition"/>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 transition"/>
              </a>

              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode className="hover:text-yellow-400 transition"/>
              </a>

            </div>

          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-gray-900 border border-cyan-500 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-gray-900 border border-cyan-500 outline-none"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-gray-900 border border-cyan-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
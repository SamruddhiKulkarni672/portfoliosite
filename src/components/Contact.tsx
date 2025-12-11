"use client";
import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub,FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useNightMode } from "./useNightMode";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const { isNightMode } = useNightMode();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) {
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        "service_2rc61pm", // Replace with your EmailJS service ID
        "template_jqvp4i9", // Replace with your EmailJS template ID
        form.current,
        "9VnUmzmn-N-8lLjES" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          setIsSubmitting(false);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-[#EEEED7] flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-32 px-4 sm:px-6 py-10">
      {/* Left Side - Contact Form on Full Image */}
      <div className="relative w-full lg:w-[37%] overflow-hidden lg:mr-11 flex justify-center items-center rounded-md">
         

          {isNightMode ? (
            // Night mode image
            <img 
              src="/Group 6.png"  // Your night mode image path
              alt="About icon night" 
              className="w-full h-auto" 
            />
          ) : (
            // Day mode image
            <img 
              src="/contactbg.png"  // Your original day mode image
              alt="About icon" 
              className="w-full h-auto" 
            />
          )}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 py-6">
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="flex flex-col gap-2 md:gap-6 w-full max-w-md sm:max-w-lg p-4 sm:p-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="p-1 sm:p-4 border border-black placeholder-black bg-transparent text-base"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="p-1 sm:p-4 border border-black placeholder-black bg-transparent text-base"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="p-2 sm:p-4 border border-black placeholder-black h-24 sm:h-36 resize-none bg-transparent text-base"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="!bg-[#EEEED7] !border text-black text-base !md:text-2xl px-2 mx-10 md:mx-0 py-2 sm:px-6 sm:py-3 font-medium hover:bg-yellow-100 hover:text-black transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            
            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="text-green-600 text-sm mt-2">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm mt-2">
                Sorry, there was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Right Side - Profile & Info */}
      <div className="w-full lg:w-1/3 p-4 sm:p-6 lg:p-12 flex items-center justify-center">
        <div className="bg-[#EEEED7] rounded-lg flex flex-col items-center text-center gap-4 w-full max-w-md">
        

            
          {isNightMode ? (
            // Night mode image
            <img
            src="/profile.jpg"
            alt="Profile"
            className="w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover border-4 border-[#653bb1]"
          />
          ) : (
            // Day mode image
             <img
            src="/profile.jpg"
            alt="Profile"
            className="w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover border-4 border-yellow-400"
          />
          )}

          <h2 className="text-xl sm:text-2xl font-semibold text-black">Samruddhi Kulkarni</h2>
          <p className="text-gray-700 text-base sm:text-lg">Full Stack Developer | UI/UX</p>
          <div className="flex gap-4 text-xl sm:text-2xl mt-2 text-yellow-600">
            <a
              href="https://linkedin.com/in/samruddhi-kulkarni-537227238"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SamruddhiKulkarni672"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@SamruddhiKulkarni-w8t"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FaYoutube />
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Or email me directly at:<br />
            <a href="mailto:samruddhi672@gmail.com" className="text-yellow-600 hover:underline">
              samruddhi672@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
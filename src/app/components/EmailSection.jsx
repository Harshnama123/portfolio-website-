"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();      if (!response.ok) {
        throw new Error(resData.error || "Failed to send message");
      }
        setEmailSubmitted(true);
      e.target.reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
          I&apos;m actively seeking new opportunities and would love to hear from you! Whether you have a project in mind,
          a question about my work, or just want to connect, I&apos;ll get back to you as soon as possible.
        </p>        <div className="socials flex flex-row gap-4">
          <Link 
            href="https://github.com/Harshnama123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-2 rounded-full hover:bg-[#181818] transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>              <Image src={GithubIcon} alt="Github Icon" className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/harsh-namdev-b01441264/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full hover:bg-[#181818] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        {emailSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
            <p className="font-medium">Thank you for your message!</p>
            <p className="text-sm">I will get back to you as soon as possible.</p>          </div>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <p className="font-medium">Failed to send message</p>
                <p className="text-sm">{error}</p>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-semibold"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="youremail@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-semibold"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="What would you like to discuss?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading
                  ? "bg-primary-400 cursor-not-allowed"
                  : "bg-primary-500 hover:bg-primary-600 active:bg-primary-700"
              } text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors flex justify-center items-center space-x-2`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

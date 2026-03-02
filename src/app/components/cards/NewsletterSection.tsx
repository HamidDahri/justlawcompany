"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <section className="w-full p-4 md:p-0">
      <div className="w-full mx-auto bg-primary rounded-2xl md:px-10 p-5 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-2xl md:text-4xl font-bold ">
            Join our newsletter<span className="text-amber-500">.</span>
          </h2>
          <p className="mt-3 text-white/80 text-sm md:text-lg">
            Stay updated with upcoming internship and trainee programs.
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 px-6 py-3.5 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="px-8 py-3.5 cursor-pointer rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#7C340D] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
